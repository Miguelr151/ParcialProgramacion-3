// Definimos los tipos válidos de tamaños y categorías
export type ValidSizes = 'Full-size' | '3/4' | '1/2' | '88-key';
export type ValidTypes = 'guitars' | 'pianos' | 'drums' | 'violins';
export type ValidBrands = 'Fender' | 'Yamaha' | 'Gibson' | 'Stradivarius';

// Definimos la interfaz de un producto individual
export interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  brand: ValidBrands;
}

// Definimos la estructura completa de la semilla (lista de productos)
export interface SeedData {
  products: SeedProduct[];
}

// Exportamos los datos iniciales
export const initialData: SeedData = {
  products: [
    {
      description: "A classic acoustic guitar with a rich, full sound and beautiful wood finish.",
      images: ["acoustic_guitar.jpg"],
      inStock: 40,
      price: 300,
      sizes: ["Full-size"],
      slug: "classic_acoustic_guitar",
      tags: ["guitar", "acoustic"],
      title: "Classic Acoustic Guitar",
      type: "guitars",
      brand: "Fender",
    },
    {
      description: "Elegant upright piano with smooth key action and warm tone.",
      images: ["upright_piano.jpg"],
      inStock: 10,
      price: 5000,
      sizes: ["88-key"],
      slug: "upright_piano_deluxe",
      tags: ["piano", "upright"],
      title: "Upright Piano Deluxe",
      type: "pianos",
      brand: "Yamaha",
    },
    {
      description: "Professional drum set with durable hardware and dynamic sound.",
      images: ["drum_set.jpg"],
      inStock: 20,
      price: 1200,
      sizes: ["Full-size"],
      slug: "pro_drum_set",
      tags: ["drums", "percussion"],
      title: "Pro Drum Set",
      type: "drums",
      brand: "Gibson",
    },
    {
      description: "Premium violin handcrafted with high-quality maple and spruce.",
      images: ["violin_premium.jpg"],
      inStock: 15,
      price: 800,
      sizes: ["3/4"],
      slug: "premium_violin",
      tags: ["violin", "string"],
      title: "Premium Violin",
      type: "violins",
      brand: "Stradivarius",
    },
  ],
};
