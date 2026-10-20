// Pastel fills used for tags, tape, sticky notes and card accents.
export const tints = [
  "var(--color-sun)",
  "var(--color-pink)",
  "var(--color-mint)",
  "var(--color-sky)",
  "var(--color-lilac)",
];

export function tint(i: number) {
  return tints[i % tints.length];
}
