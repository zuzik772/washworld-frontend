import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";

export interface UserState {
  user: User;
}

const initialState: User = {
  user_id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  birthday: new Date(1990, 1, 1).toISOString(),
  membership: {
    membership_id: 3,
    name: "Premium",
    price: 169,
    packages: [
      {
        package_id: 1,
        name: "Premium Package",
        price: 179,
        included_features: [
          { feature_id: 1, name: "Shampoo" },
          { feature_id: 2, name: "Drying" },
          { feature_id: 3, name: "Brush wash" },
          { feature_id: 4, name: "High-pressure rinse" },
          { feature_id: 5, name: "Wheel wash" },
          { feature_id: 7, name: "Undercarriage rinse" },
          { feature_id: 8, name: "Polishing" },
        ],
        not_included_features: [
          { feature_id: 9, name: "Extra drying" },
          { feature_id: 10, name: "Insect cleaning" },
          { feature_id: 11, name: "Foam Splash" },
          { feature_id: 12, name: "Degreasing" },
        ],
      },
    ],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
