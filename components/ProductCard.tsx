import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import FavoriteButton from "./FavoriteButton";
import type { Product } from "../interfaces/product";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article style={{ border: "1px solid #eee", borderRadius: 12, padding: 12, boxShadow: "0 1px 2px rgba(0,0,0,.04)" }}>
      <Link href={`/product/${p.slug}`} style={{ display: "block" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", borderRadius: 8, marginBottom: 12 }}>
          <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} />
        </div>
        <h3 style={{ margin: "0 0 6px", fontWeight: 600, fontSize: 14 }}>{p.title}</h3>
      </Link>

      {typeof p.price === "number" && (
        <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 14 }}>${p.price.toFixed(2)}</div>
      )}

      {p.tags?.length ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
          {p.tags.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}

      <FavoriteButton slug={p.slug} />
    </article>
  );
}
