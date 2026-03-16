import { ayurvedaBlogs } from "./ayurveda/ayurvedaBlogs";
import { digestiveBlogs } from "./digestive/digestiveBlogs";

export const blogs = [
  ...ayurvedaBlogs,
  ...digestiveBlogs,
];

export const blogCategories = [
  "All",
  "Ayurveda",
  "Digestive",
];