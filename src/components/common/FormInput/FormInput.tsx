// 라이브러리
import { ChangeHandler } from "react-hook-form";
import React, { forwardRef } from "react";

// 컴포넌트
import { SFormInput } from "./FormInput.style";

type PropsType = {
  errorMessage?: JSX.Element;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
  placeholder: string;
  type: "text" | "email" | "password" | "number";
};

const FormInput = forwardRef(
  ({ errorMessage, ...rest }: PropsType, ref: React.Ref<any>) => {
    return (
      <>
        <SFormInput ref={ref} {...rest} isError={!!errorMessage} />
        {errorMessage}
      </>
    );
  }
);
FormInput.displayName = "FormInput";

export default FormInput;
