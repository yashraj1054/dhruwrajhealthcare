export const productCategories = [
  "All",
  "Digestive",
  "Diabetes",
  "Skin Care",
  "Joint Pain",
  "Immunity",
];

export const products = [
  {
    id: 1,
    slug: "diabetes-care-juice",
    name: "Ayurvedic Diabetes Care Juice",
    category: "Diabetes",
    productImage: "/images/Products/Diabetes/dc1.webp",
    originalPrice: 999,
    discount: 20,
    inStock: false,

    images: [
      "/images/Products/Diabetes/dc1.webp",
      "/images/Products/Diabetes/dc2.webp",
      "/images/Products/Diabetes/dc3.webp",
      "/images/Products/Diabetes/dc4.webp",
    ],

    shortDescription:
      "Supports healthy blood sugar levels naturally.",

    description:
      "Formulated using classical Ayurvedic herbs to support healthy glucose metabolism and improve overall vitality.",

    benefits: [
      "Supports blood sugar balance",
      "Boosts metabolism",
      "Improves energy levels",
    ],

    usage:
      "Take 20ml twice daily after meals or as directed by physician.",

    buyLinks: {
      amazon: "https://amazon.in/your-link",
      flipkart: "https://flipkart.com/your-link",
    },
  },

  {
    id: 2,
    slug: "joint-pain-oil",
    name: "Joint Pain Relief Oil",
    productImage: "/images/Products/JointPain/jointpain1.webp",
    category: "Joint Pain",
    originalPrice: 999,
    discount: 20,
    inStock: true,

    images: [
      "/images/Products/JointPain/jointpain1.webp",
      "/images/Products/JointPain/jointpain2.webp",
      "/images/Products/JointPain/jointpain3.webp",
      "/images/Products/JointPain/jointpain4.webp",
    ],

    shortDescription:
      "Herbal oil for joint and muscle comfort.",

    description:
      "Traditional oil prepared with potent Ayurvedic herbs to relieve stiffness and discomfort.",

    benefits: [
      "Reduces stiffness",
      "Improves flexibility",
      "Natural pain support",
    ],

    usage:
      "Apply gently on affected area twice daily.",

    buyLinks: {
      amazon: "https://amazon.in/your-link",
      flipkart: "https://flipkart.com/your-link",
    },
  },
];