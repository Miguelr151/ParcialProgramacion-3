"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesState {
  slugs: string[];
  toggle: (slug: string) => void;
  isFav: (slug: string) => boolean;
  clear: () => void;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      slugs: [],

      toggle: (slug) =>
        set((state) => ({
          slugs: state.slugs.includes(slug)
            ? state.slugs.filter((s) => s !== slug)
            : [...state.slugs, slug],
        })),

      isFav: (slug) => get().slugs.includes(slug),

      clear: () => set({ slugs: [] }),
    }),
    {
      name: "favorites-store", // nombre del storage
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);
