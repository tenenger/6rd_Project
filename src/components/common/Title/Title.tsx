import { TitleProps } from "@src/models/title";
import { STitle } from "./Title.style";

const Title = ({ children }: TitleProps) => {
  return <STitle>{children}</STitle>;
};

export default Title;
