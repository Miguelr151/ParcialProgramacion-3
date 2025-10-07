import type { Product } from "../interfaces/product";
import { initialData } from "./musical_instruments_data";

function normalize(raw: any): Product {
  const first = Array.isArray(raw.images) ? raw.images[0] : undefined;

  // ✅ Asegura siempre que haya un slash o URL válida
  let image: string;

  if (typeof first === "string") {
    if (first.startsWith("http")) {
      image = first; // imagen remota
    } else if (first.startsWith("/")) {
      image = first; // ya tiene slash, no hacer nada
    } else {
      image = `/${first}`; // agrega el slash inicial
    }
  } else {
    image = "/placeholder.jpg"; // imagen por defecto
  }

  return {
    slug: raw.slug ?? "sin-slug",
    title: raw.title ?? "Sin título",
    description: raw.description ?? "",
    image, // 👈 usa la ruta corregida
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
