import { ayurvedaBlogs } from "./ayurveda/ayurvedaBlogs";
// import { digestiveBlogs } from "./digestive/digestiveBlogs";
import { kidneyBlogs } from "./kidney/kidneyBlogs";

export const blogs = [
  ...ayurvedaBlogs,
  // ...digestiveBlogs,
  ...kidneyBlogs,
];

export const blogCategories = [
  "All",
  "Ayurveda",
  // "Digestive",
  "Kidney",
];