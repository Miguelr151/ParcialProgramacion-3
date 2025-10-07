"use client";

import ProductGrid from "../../components/ProductGrid";
import type { Product } from "../../interfaces/product";
import { useFavorites } from "../../store/favorites";

export default function ClientFavorites({ products }: { products: Product[] }) {
  const slugs = useFavorites((s) => s.slugs);
  const filtered = products.filter((p) => slugs.includes(p.slug));
  if (filtered.length === 0) return <p>No tienes instrumentos marcados como favoritos.</p>;
  return <ProductGrid products={filtered} />;
}