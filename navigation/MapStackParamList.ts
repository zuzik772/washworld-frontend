export type MapStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MapScreen: undefined;
  Location: { locationTitle: string | undefined };
  Package: undefined;
  PreWash: {
    packageName:
      | "Basic"
      | "Gold"
      | "Premium"
      | "Premium Plus"
      | "All Inclusive";
  };
  Wash: undefined;
  PostWash: undefined;
};
