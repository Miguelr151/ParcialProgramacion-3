import Image from "next/image";
import { notFound } from "next/navigation";

import FavoriteButton from "@/components/FavoriteButton";
import Tag from "@/components/Tag";
import { SEED } from "@/seed";

// ✅ Genera rutas estáticas basadas en los slugs de los productos
export async function generateStaticParams() {
  return SEED.products.map((p) => ({
    slug: p.slug,
  }));
}

// ✅ Página de detalle del producto
export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = SEED.products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 24,
        padding: 20,
      }}
    >
      {/* Imagen del producto */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Información principal */}
      <div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
          {product.title}
        </h1>

        {typeof product.price === "number" && (
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            ${product.price.toFixed(2)}
          </div>
        )}

        <FavoriteButton slug={product.slug} size="md" />

        {/* Etiquetas */}
        {product.tags?.length ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 16,
            }}
          >
            {product.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}

        {/* Descripción */}
        <p style={{ marginTop: 16, color: "#444", lineHeight: 1.5 }}>
          {product.description || "Sin descripción disponible."}
        </p>

        {/* Datos adicionales */}
        <ul style={{ marginTop: 16, fontSize: 14, color: "#555" }}>
          <li>
            <strong>Marca:</strong> {product.attributes.brand}
          </li>
          <li>
            <strong>Tipo:</strong> {product.attributes.type}
          </li>
          <li>
            <strong>Tamaño:</strong> {product.attributes.sizes}
          </li>
          <li>
            <strong>Stock:</strong> {product.attributes.stock}
          </li>
        </ul>
      </div>
    </article>
  );
}
