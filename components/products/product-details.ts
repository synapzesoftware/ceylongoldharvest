import { cinnamonProducts } from "./categories/cinnamon";
import { Spices } from "./categories/Spices";
import { Herbal } from "./categories/Herbal";
import { Tea } from "./categories/Tea";

export const products = [
  ...cinnamonProducts,
  ...Spices,
  ...Herbal,
  ...Tea,
];
