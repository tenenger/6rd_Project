import { FormLabelProps } from "@src/models/formLabel";
import { SFormLabel } from "./FormLabel.style";

const FormLabel = ({ children, isError }: FormLabelProps) => {
  return <SFormLabel isError={isError}>{children}</SFormLabel>;
};

export default FormLabel;
