export interface Feature {
  feature_id: number;
  feature_name: string;
  feature_description: string;
}

export interface Package {
  package_id: number;
  package_name: string;
  package_price: number;
  features: Feature[];
}

export interface Membership {
  membership_id: number;
  membership_name: string;
  membership_price: number;
  package: Package;
}
