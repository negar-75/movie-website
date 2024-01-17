import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { string, object } from "yup";
import * as yup from "yup";

export type InputType = {
  label: string;
  isPassword: boolean;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  message?: string;
};

export const registerFormValidationScheme = object({
  username: string().required().min(6),
  password: string().required().min(8),
  repeatPassword: string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("password")], "Passwords must match")
    .nullable(),
  email: string().email("Invalid email").required("Email is required"),
});

export type RegistrationFormProps<T> = {
  onSubmit: (user: T) => Promise<void>;
  errors: Record<string, string>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputsList: InputType[];
  buttonText: string;
};

export type ValidationForm<T> = (
  schema: yup.AnyObjectSchema,
  inputs: T
) => Promise<Partial<T>>;

export type HandleInputChange<T> = (
  event: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>
) => void;

export type HandleSubmit<T> = (
  event: React.FormEvent,
  schema: yup.AnyObjectSchema,
  inputs: T,
  callApiFunc: (input: T) => Promise<void>,
  setErrors: Dispatch<SetStateAction<Partial<T>>>
) => Promise<void>;
