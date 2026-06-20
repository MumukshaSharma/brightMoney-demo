import { merchantCategories } from "./merchantCategories";

export function categorizeTransaction(description) {
  const text = description.toLowerCase();

  for (const merchant in merchantCategories) {
    if (text.includes(merchant)) {
      return merchantCategories[merchant];
    }
  }

  return null;
}