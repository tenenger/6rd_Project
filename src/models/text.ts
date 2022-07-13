import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode | object;
  isCorrect?: boolean;
};
