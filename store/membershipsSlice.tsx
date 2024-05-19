import { createSlice } from "@reduxjs/toolkit";
import { Membership } from "../types/Membership";

export interface MembershipState {
  memberships: Membership[];
}

const initialState: MembershipState = {
  memberships: [
    {
      membership_id: 1,
      name: "Basic",
      price: 99,
      packages: [
        {
          package_id: 1,
          name: "Basic Package",
          price: 99,
          includedFeatures: [
            { feature_id: 1, name: "Shampoo" },
            { feature_id: 2, name: "Air drying" },
            { feature_id: 3, name: "Brush wash" },
            { feature_id: 4, name: "High-pressure rinse" },
          ],
          notIncludedFeatures: [
            { feature_id: 5, name: "Wheel wash" },
            { feature_id: 6, name: "Rinse wax" },
            { feature_id: 7, name: "Undercarriage rinse" },
            { feature_id: 8, name: "Polishing" },
            { feature_id: 9, name: "Extra drying" },
            { feature_id: 10, name: "Insect cleaning" },
            { feature_id: 11, name: "Foam Splash" },
            { feature_id: 12, name: "Degreasing" },
          ],
        },
      ],
    },
    {
      membership_id: 2,
      name: "Gold",
      price: 139,
      packages: [
        {
          package_id: 1,
          name: "Gold Package",
          price: 139,
          includedFeatures: [
            { feature_id: 1, name: "Shampoo" },
            { feature_id: 2, name: "Drying" },
            { feature_id: 3, name: "Brush wash" },
            { feature_id: 4, name: "High-pressure rinse" },
            { feature_id: 5, name: "Wheel wash" },
            { feature_id: 6, name: "Rinse wax" },
          ],
          notIncludedFeatures: [
            { feature_id: 7, name: "Undercarriage rinse" },
            { feature_id: 8, name: "Polishing" },
            { feature_id: 9, name: "Extra drying" },
            { feature_id: 10, name: "Insect cleaning" },
            { feature_id: 11, name: "Foam Splash" },
            { feature_id: 12, name: "Degreasing" },
          ],
        },
      ],
    },
    {
      membership_id: 3,
      name: "Premium",
      price: 179,
      packages: [
        {
          package_id: 1,
          name: "Premium Package",
          price: 179,
          includedFeatures: [
            { feature_id: 1, name: "Shampoo" },
            { feature_id: 2, name: "Drying" },
            { feature_id: 3, name: "Brush wash" },
            { feature_id: 4, name: "High-pressure rinse" },
            { feature_id: 5, name: "Wheel wash" },
            { feature_id: 7, name: "Undercarriage rinse" },
            { feature_id: 8, name: "Polishing" },
          ],
          notIncludedFeatures: [
            { feature_id: 9, name: "Extra drying" },
            { feature_id: 10, name: "Insect cleaning" },
            { feature_id: 11, name: "Foam Splash" },
            { feature_id: 12, name: "Degreasing" },
          ],
        },
      ],
    },
    {
      membership_id: 4,
      name: "Premium Plus",
      price: 179,
      packages: [
        {
          package_id: 1,
          name: "Premium Plus Package",
          price: 179,
          includedFeatures: [
            { feature_id: 1, name: "Shampoo" },
            { feature_id: 2, name: "Drying" },
            { feature_id: 3, name: "Brush wash" },
            { feature_id: 4, name: "High-pressure rinse" },
            { feature_id: 5, name: "Wheel wash" },
            { feature_id: 6, name: "Rinse wax" },
            { feature_id: 7, name: "Undercarriage rinse" },
            { feature_id: 8, name: "Polishing" },
            { feature_id: 10, name: "Insect cleaning" },
          ],
          notIncludedFeatures: [
            { feature_id: 9, name: "Extra drying" },
            { feature_id: 11, name: "Foam Splash" },
            { feature_id: 12, name: "Degreasing" },
          ],
        },
      ],
    },
    {
      membership_id: 5,
      name: "All Inclusive",
      price: 249,
      packages: [
        {
          package_id: 1,
          name: "All Inclusive Package",
          price: 249,
          includedFeatures: [
            { feature_id: 1, name: "Shampoo" },
            { feature_id: 2, name: "Drying" },
            { feature_id: 3, name: "Brush wash" },
            { feature_id: 4, name: "High-pressure rinse" },
            { feature_id: 5, name: "Wheel wash" },
            { feature_id: 6, name: "Rinse wax" },
            { feature_id: 7, name: "Undercarriage rinse" },
            { feature_id: 8, name: "Polishing" },
            { feature_id: 9, name: "Extra drying" },
            { feature_id: 10, name: "Insect cleaning" },
            { feature_id: 11, name: "Foam Splash" },
            { feature_id: 12, name: "Degreasing" },
          ],
          notIncludedFeatures: [],
        },
      ],
    },
  ],
};

export const membershipsSlice = createSlice({
  name: "memberships",
  initialState,
  reducers: {},
});

export const {} = membershipsSlice.actions;
export default membershipsSlice.reducer;
