export class SignUpDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthday: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }
}
