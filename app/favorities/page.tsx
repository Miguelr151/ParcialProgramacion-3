import { SEED } from "@/seed";        // o "../../seed"
import ClientFavorites from "./section";

export const dynamic = "force-static";

export default function FavoritesPage() {
  return (
    <section style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
        Tus favoritos
      </h1>
      <ClientFavorites products={SEED.products} />
    </section>
  );
}
