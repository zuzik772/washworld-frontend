import { Membership } from "./Membership";

export interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  membership: Membership;
}
