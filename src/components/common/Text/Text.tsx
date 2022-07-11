import { SText } from "./Text.style";

type TextProps = {
  children: any;
  isCorrect?: boolean;
};

export default function Text({ children, isCorrect }: TextProps) {
  return <SText isCorrect={isCorrect}>{children}</SText>;
}
