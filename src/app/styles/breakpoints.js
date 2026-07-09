// Single source of truth for responsive breakpoints.
// sm: mobile (≤640px) · md: tablet (≤900px)
export const BP = { sm: 640, md: 900 };

export const media = {
	sm: `@media (max-width: ${BP.sm}px)`,
	md: `@media (max-width: ${BP.md}px)`,
};
