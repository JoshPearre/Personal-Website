// Resolve public assets so they work in dev AND in the portable (base:'./') build.
const BASE = import.meta.env.BASE_URL;
export const asset = (file) => `${BASE}images/${file}`;
export const resumeUrl = `${BASE}resume/Joshua Pearre Resume.pdf`;
