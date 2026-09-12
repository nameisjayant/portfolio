export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prepends the basePath to root-relative asset URLs so plain <img src="/foo">
// resolves correctly when the site is served under a sub-path
// (e.g. https://user.github.io/portfolio/).
// Absolute URLs and empty strings are returned unchanged.
export function asset(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path)) return path;
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
