export interface Feature {
  feature_id: number;
  name: string;
}

export interface Package {
  package_id: number;
  name: string;
  price: number;
  includedFeatures: Feature[];
  notIncludedFeatures: Feature[];
}

export interface Membership {
  membership_id: number;
  name: "Basic" | "Gold" | "Premium" | "Premium Plus" | "All Inclusive";
  price: number;
  packages: Package[];
}
