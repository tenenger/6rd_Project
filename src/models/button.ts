import { ReactNode } from "react";
import { ChangeHandler } from "react-hook-form";

export type ButtonProps = {
  children: ReactNode;
  type: "submit" | "button";
};
