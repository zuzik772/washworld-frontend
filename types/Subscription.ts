export interface Package {
  name: "Basic" | "Gold" | "Premium" | "Premium Plus" | "All Inclusive";
  price: number;
  includedFeatures: string[];
  allFeatures: string[];
}
