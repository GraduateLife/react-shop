import { Category } from "../../models/category.type";

import { writeOne, readCollection } from "../write-and-read";

const CateEntity: Category[] = [
  {
    CateName: "hat",
    CateImageUrl:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    CateName: "coat",
    CateImageUrl:
      "https://images.unsplash.com/photo-1617391258031-f8d80b22fb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    CateName: "men",
    CateImageUrl:
      "https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    CateName: "women",
    CateImageUrl:
      "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const writeCategories = async (whatWeSell = CateEntity) => {
  whatWeSell.forEach(async (c) => {
    await writeOne<Category>("categories", c.CateName, c);
  });
  return "ok";
};
export const readCategories = async () =>
  await readCollection<Category>("categories");
