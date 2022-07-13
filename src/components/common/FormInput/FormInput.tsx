import React, { forwardRef } from "react";

import { FormInputProps } from "@src/models/formInput";
import { SFormInput } from "./FormInput.style";

const FormInput = forwardRef(
  ({ isError, ...rest }: FormInputProps, ref: React.Ref<any>) => {
    return (
      <>
        <SFormInput ref={ref} {...rest} isError={isError} />
      </>
    );
  }
);
FormInput.displayName = "FormInput";

export default FormInput;
