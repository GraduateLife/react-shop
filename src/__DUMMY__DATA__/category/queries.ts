import hatPreview from "./hat-preview.png";
import coatPreview from "./coat-preview.png";
import { Category } from "../../models/category.type";

const AllCategories: Category[] = [
  {
    CateName: "hat",
    CateImageUrl: hatPreview,
  },
  {
    CateName: "coat",
    CateImageUrl: coatPreview,
  },
];

export const fetchAllCategories = (): Category[] => AllCategories;
