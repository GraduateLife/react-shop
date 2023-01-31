import hatPreview from "./hat-preview.png";
import coatPreview from "./coat-preview.png";
import { Category } from "../../models/category.type";

const AllCategories: Category[] = [
  {
    categoryName: "hat",
    imageUrl: hatPreview,
  },
  {
    categoryName: "coat",
    imageUrl: coatPreview,
  },
];

export const fetchAllCategories = (): Category[] => AllCategories;
