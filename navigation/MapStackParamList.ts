import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type MapStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MapScreen: undefined;
  Location: {
    locationTitle: string | undefined;
    distance: number | undefined;
    locationId: number | undefined;
    locationStatus: string | undefined;
  };
  Package: undefined;
  PreWash: undefined;
  Wash: undefined;
  PostWash: undefined;
};
