"use client";

import Button from "./Button";
import { useFavorites } from "../store/favorites";
import { cn } from "../utils/cn";

export default function FavoriteButton({ slug, size = "sm" }: { slug: string; size?: "sm" | "md" }) {
  const { toggle, isFav } = useFavorites();
  const active = isFav(slug);

  return (
    <Button
      onClick={() => toggle(slug)}
      style={{
        borderColor: active ? "#f43f5e" : "#ddd",
        color: active ? "#be123c" : "inherit",
        background: active ? "#fff1f2" : "#fff",
        padding: size === "md" ? "10px 14px" : "8px 12px",
      }}
      aria-pressed={active}
      aria-label={active ? "Quitar de favoritos" : "Agregar a favoritos"}
      className={cn(active ? "is-active" : "")}
    >
      {active ? "★ Favorito" : "☆ Agregar"}
    </Button>
  );
}
