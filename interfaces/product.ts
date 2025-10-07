export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  tags: string[];

  // ✅ Sección de atributos adicionales
  attributes: {
    brand?: string;
    type?: string;
    sizes?: string;
    stock?: number;
  };
}
