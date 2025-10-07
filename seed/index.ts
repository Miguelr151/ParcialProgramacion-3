import type { Product } from "../interfaces/product";
import { initialData } from "./musical_instruments_data";

function normalize(raw: any): Product {
  return {
    slug: raw.slug ?? "sin-slug",
    title: raw.title ?? "Sin título",
    description: raw.description ?? "",
    image: raw.images?.[0] ?? "/placeholder.jpg",
    price: typeof raw.price === "number" ? raw.price : undefined,
    tags: raw.tags ?? [],
    attributes: {
      brand: raw.brand,
      type: raw.type,
      sizes: raw.sizes?.join(", "),
      stock: raw.inStock,
    },
  };
}

export const SEED = {
  category: "musical_instruments",
  products: initialData.products.map(normalize),
};
