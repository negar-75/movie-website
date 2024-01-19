import { InputType } from "@/types/forms";

export const registerInputsList: InputType[] = [
  {
    label: "Username *",
    name: "username",
    isPassword: false,
    message: "Username length should be at least 6",
  },
  {
    label: "Email *",
    name: "email",
    isPassword: false,
  },
  {
    label: "Password *",
    name: "password",
    isPassword: true,
    message: "Password length should be at least 8",
  },
  {
    label: "Repeat your Password *",
    name: "repeatPassword",
    isPassword: true,
  },
];
