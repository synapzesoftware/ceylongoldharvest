export type ProductType = {
  id: string; // allow prefixes like "c1", "b1"
  name: string;
  description: string;
  category: "Cinnamon" | "B" | "C" | "D";
  frontImage: string;
  backImage: string;
};
