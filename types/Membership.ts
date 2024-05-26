export interface Feature {
  feature_id: number;
  name: string;
}

export interface Package {
  package_id: number | null;
  name: string | null;
  price: number | null;
  included_features: Feature[];
  not_included_features: Feature[];
}

export interface Membership {
  membership_id: number | null;
  name: "Basic" | "Gold" | "Premium" | "Premium Plus" | "All Inclusive" | "";
  price: number | null;
  packages: Package[];
}
