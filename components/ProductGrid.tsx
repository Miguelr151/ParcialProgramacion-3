import type { Product } from "../interfaces/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
      }}
    >
      {products.map((p) => (
        <ProductCard key={p.slug} p={p} />
      ))}
    </div>
  );
}
    