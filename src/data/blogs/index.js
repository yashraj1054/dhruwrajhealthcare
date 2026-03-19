import { ayurvedaBlogs } from "./ayurveda/ayurvedaBlogs";
// import { digestiveBlogs } from "./digestive/digestiveBlogs";
import { kidneyBlogs } from "./kidney/kidneyBlogs";
import { womenBlogs } from "./womens/womenBlogs";
import { skinBlogs } from "./skin/skinBlogs";

export const blogs = [
  ...ayurvedaBlogs,
  // ...digestiveBlogs,
  ...kidneyBlogs,
  ...womenBlogs,
  ...skinBlogs,
];

export const blogCategories = [
  "All",
  "Ayurveda",
  // "Digestive",
  "Kidney",
  "Women's Health",
  "Skin Care",
];