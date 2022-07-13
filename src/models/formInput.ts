import { ChangeHandler } from "react-hook-form";

export type FormInputProps = {
  isError?: boolean;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password" | "number";
};
