import React, { useMemo, useState } from 'react';
import { content } from '../i18n/content';
import { usePreferences } from '../state/PreferencesContext';
import projects, { type Project, type ProjectCategory } from '../generated/projects.generated';
import { projectImages } from '../data/projectImages';

function matchesQuery(p: Project, q: string) {
  const query = q.trim().toLowerCase();
  if (!query) return true;
  const hay = `${p.name} ${p.description ?? ''} ${p.language ?? ''}`.toLowerCase();
  return hay.includes(query);
}

export default function ProjectsPage() {
  const { lang } = usePreferences();
  const t = content[lang];
  const starLabel = lang === 'de' ? 'Sterne' : lang === 'fr' ? 'étoiles' : 'stars';
  const updatedLabel = lang === 'de' ? 'Aktualisiert am' : lang === 'fr' ? 'Mis à jour le' : 'Updated';
  const noPreviewLabel = lang === 'de' ? 'Aucun aperçu' : lang === 'fr' ? 'Pas d’aperçu' : 'No preview';
  const prevLabel = lang === 'de' ? 'Zurück' : lang === 'fr' ? 'Précédent' : 'Prev';
  const nextLabel = lang === 'de' ? 'Weiter' : lang === 'fr' ? 'Suivant' : 'Next';

  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Project | null>(null);
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    for (const p of projects) set.add(p.category);
    return ['Web', 'Java', 'Python', 'C', 'Other'].filter((c) => set.has(c as ProjectCategory)) as ProjectCategory[];
  }, []);

  const filtered = useMemo(() => {
    const list = projects.filter((p) => (category === 'All' ? true : p.category === category)).filter((p) => matchesQuery(p, query));
    return list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [category, query]);

  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="container">
      <div className="section">
        <div className="sectionHeader">
          <div>
            <h2 className="sectionTitle">{t.projects.title}</h2>
            <p className="sectionSub">{t.projects.subtitle}</p>
          </div>
        </div>

        <div className="filtersRow">
          <input
            className="searchInput"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={t.projects.searchPlaceholder}
            aria-label="Search"
          />

          <button className={`chipBtn ${category === 'All' ? 'chipBtnActive' : ''}`} onClick={() => { setCategory('All'); setPage(1); }}>
            {t.projects.filterAll}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`chipBtn ${category === c ? 'chipBtnActive' : ''}`}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projectGrid" aria-label="Projects">
          {visible.map((p) => (
            <div
              key={p.id}
              className="surface projectCard"
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActive(p);
              }}
            >
              <div className="projectThumb">
                {projectImages[p.name] ? <img src={projectImages[p.name]} alt={p.name} /> : <i className="fa-solid fa-code" style={{ fontSize: 28, color: 'rgba(255,255,255,0.75)' }} />}
              </div>
              <h3 className="projectName">{p.name}</h3>
              <p className="projectDesc">{p.description || '—'}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span className="tag">
                  <i className="fa-solid fa-layer-group" style={{ color: 'var(--accent2)' }} />
                  {p.category}
                </span>
                <span className="tag">
                  <i className="fa-solid fa-code" style={{ color: 'var(--accent2)' }} />
                  {p.language || 'Unknown'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ color: 'var(--muted)', fontWeight: 650 }}>
            {filtered.length} {lang === 'de' ? 'Projekte' : lang === 'fr' ? 'projets' : 'projects'} • Page {page}/{totalPages}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              className="chipBtn"
              disabled={page <= 1}
              style={{ opacity: page <= 1 ? 0.5 : 1, cursor: page <= 1 ? 'not-allowed' : 'pointer' }}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <i className="fa-solid fa-chevron-left" /> {prevLabel}
            </button>
            <button
              className="chipBtn"
              disabled={page >= totalPages}
              style={{ opacity: page >= totalPages ? 0.5 : 1, cursor: page >= totalPages ? 'not-allowed' : 'pointer' }}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              {nextLabel} <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>

      {active && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="modal surface">
            <div className="modalHeader">
              <div>
                <div className="modalTitle">{active.name}</div>
                <div style={{ color: 'var(--muted)', marginTop: 6, fontWeight: 650 }}>
                  {active.category} • {active.language || 'Unknown'}
                </div>
              </div>
              <button className="closeBtn" onClick={() => setActive(null)} aria-label="Close">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div style={{ marginTop: 14 }}>
              <div className="projectThumb" style={{ height: 200 }}>
                {projectImages[active.name] ? (
                  <img src={projectImages[active.name]} alt={active.name} />
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-code" style={{ fontSize: 42, color: 'rgba(255,255,255,0.75)' }} />
                    <div style={{ marginTop: 10, color: 'rgba(255,255,255,0.86)', fontWeight: 800 }}>{noPreviewLabel}</div>
                  </div>
                )}
              </div>
              <p style={{ margin: '14px 0 0', color: 'var(--muted)', lineHeight: 1.65 }}>{active.description || '—'}</p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
                <span className="tag">
                  <i className="fa-solid fa-star" style={{ color: 'var(--accent2)' }} />
                  {active.stargazers} {starLabel}
                </span>
                <span className="tag">
                  <i className="fa-solid fa-clock" style={{ color: 'var(--accent2)' }} />
                  {updatedLabel} {new Date(active.updatedAt).toLocaleDateString()}
                </span>
              </div>

              <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btnPrimary" href={active.htmlUrl} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square" /> {t.projects.showRepo}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

