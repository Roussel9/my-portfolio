import fs from 'node:fs/promises';
import path from 'node:path';

const username = process.env.GITHUB_USERNAME || 'Roussel9';
const token = process.env.GITHUB_TOKEN || '';

const perPage = 100;
const maxPages = 3; // safety limit

function toCategory(language) {
  const lang = (language || '').toLowerCase();
  if (!lang) return 'Other';
  if (['javascript', 'typescript', 'html', 'css', 'darts', 'dart', 'php'].includes(lang)) return 'Web';
  if (['java'].includes(lang)) return 'Java';
  if (['python'].includes(lang)) return 'Python';
  if (['c', 'c++', 'c#'].includes(lang)) return 'C';
  return 'Other';
}

async function fetchPage(page) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=${perPage}&page=${page}&sort=updated`;

  const headers = {
    Accept: 'application/vnd.github+json',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}. ${text.slice(0, 200)}`);
  }
  return res.json();
}

function escapeTsString(s) {
  return String(s ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\r?\n/g, '\\n');
}

async function main() {
  console.log(`[generate-projects] Fetching repos for ${username}...`);

  const all = [];
  for (let page = 1; page <= maxPages; page++) {
    // eslint-disable-next-line no-await-in-loop
    const repos = await fetchPage(page);
    if (!Array.isArray(repos) || repos.length === 0) break;
    all.push(...repos);
    if (repos.length < perPage) break;
  }

  const projects = all
    .filter((r) => r && r.owner?.login === username)
    .filter((r) => r.private !== true)
    .filter((r) => r.fork !== true)
    .map((r) => ({
      id: Number(r.id),
      name: r.name,
      htmlUrl: r.html_url,
      description: r.description ?? '',
      language: r.language,
      stargazers: r.stargazers_count ?? 0,
      updatedAt: r.updated_at,
      category: toCategory(r.language),
    }));

  projects.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));

  const outFile = path.join(process.cwd(), 'src', 'generated', 'projects.generated.ts');

  const content = `export type ProjectCategory = 'Web' | 'Java' | 'Python' | 'C' | 'Other';

export type Project = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  language: string | null;
  stargazers: number;
  updatedAt: string;
  category: ProjectCategory;
};

const projects: Project[] = [
${projects
  .map(
    (p) => `  {
    id: ${p.id},
    name: \`${escapeTsString(p.name)}\`,
    htmlUrl: \`${escapeTsString(p.htmlUrl)}\`,
    description: \`${escapeTsString(p.description)}\`,
    language: ${p.language ? `\`${escapeTsString(p.language)}\`` : 'null'},
    stargazers: ${p.stargazers},
    updatedAt: \`${escapeTsString(p.updatedAt)}\`,
    category: '${p.category}'
  },`,
  )
  .join('\n')}
];

export default projects;
`;

  await fs.writeFile(outFile, content, 'utf8');
  console.log(`[generate-projects] Wrote ${projects.length} projects to ${path.relative(process.cwd(), outFile)}.`);
}

main().catch((err) => {
  console.error('[generate-projects] Failed:', err?.message || err);
  process.exit(1);
});

