export type ProductType = {
  id: string; // allow prefixes like "c1", "b1"
  name: string;
  description: string;
  category: "Cinnamon" | "Spices" | "Herbal" | "Tea";
  frontImage: string;
  backImage: string;
};
