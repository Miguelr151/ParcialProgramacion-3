import { SEED } from "@/seed";
import ProductGrid from "@/components/ProductGrid";

export const revalidate = 60; // opcional

export default function HomePage() {
  const { products } = SEED;

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        Instrumentos musicales
      </h1>

      <ProductGrid products={products} />
    </main>
  );
}
