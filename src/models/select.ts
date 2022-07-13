import { ChangeHandler } from "react-hook-form";

export type SelectProps = {
  data: { comment: string }[];
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  placeholder?: string;
};
