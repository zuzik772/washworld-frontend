import { Membership } from "./Membership";

export interface User {
  user_id: number | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  birthday: Date | null;
  membership: Membership | null;
}
