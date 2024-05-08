import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Subscription } from "../types/subscription";

export interface SubscriptionState {
  subscriptions: Subscription[];
}

const initialState: SubscriptionState = {
  subscriptions: [
    {
      name: "Basic",
      price: 99,
      includedFeatures: [
        "Shampoo",
        "Let tørring",
        "Børstevask",
        "Højtryksskyl",
      ],
      allFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
    },
    {
      name: "Gold",
      price: 139,
      includedFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
      ],
      allFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
    },
    {
      name: "Premium",
      price: 169,
      includedFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
      ],
      allFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
    },
    {
      name: "Premium Plus",
      price: 179,
      includedFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
      ],
      allFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
    },
    {
      name: "All Inclusive",
      price: 229,
      includedFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
      allFeatures: [
        "Shampoo",
        "Tørring",
        "Børstevask",
        "Højtryksskyl",
        "Hjulvask",
        "Skyllevoks",
        "Undervognsskyl",
        "Polering",
        "Insektrens",
        "Affedtning",
        "Foam Splash",
        "Ekstra tørring",
      ],
    },
  ],
};

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
});

export const {} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
