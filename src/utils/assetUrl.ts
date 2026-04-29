export function assetUrl(assetPath: string) {
  const clean = assetPath.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}

