import { TextProps } from "@src/models/text";
import { SText } from "./Text.style";

export default function Text({ children, isCorrect }: TextProps) {
  return <SText isCorrect={isCorrect}>{children}</SText>;
}
