// Palette roles (values invert between themes):
//   lightShade  — page background
//   lightAccent — section band background
//   mainBrand   — display headings & buttons (large text / UI only)
//   darkAccent  — small brand-colored text (AA on lightShade & lightAccent)
//   darkShade   — body text

export const LIGHTCOLORS = {
	lightShade: "#FAFCFB",
	lightAccent: "#DEF0E7",
	mainBrand: "#288F6B",
	darkAccent: "#1F7257",
	darkShade: "#1E2A26",
}

export const DARKCOLORS = {
	lightShade: "#101613",
	lightAccent: "#1B2620",
	mainBrand: "#7FE0B8",
	darkAccent: "#9DB4A8",
	darkShade: "#E6F2EB",
}

// Project category chips: fixed backgrounds with white text (all ≥4.5:1)
export const CATEGORY_COLORS: Record<string, string> = {
	"Website": "#A83232",
	"Mobile App": "#A6336E",
	"Web App": "#4A44C4",
}

// Decorative blurred background balls, per theme
export const BALL_COLORS = {
	light: ["#8FD9BC", "#BFE3D2", "#5CBF9A"],
	dark: ["#1E4536", "#27553F", "#173428"],
}
