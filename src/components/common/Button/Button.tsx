import React, { forwardRef, ReactNode } from "react";
import { SButton } from "./Button.style";

type ButtonProps = {
  /**
   * 버튼 내용
   */
  label: string;
  /**
   * 버튼 종류
   */
  type: "submit" | "button";
};

const Button = forwardRef(
  ({ label, ...rest }: ButtonProps, ref: React.Ref<any>) => {
    return (
      <SButton {...rest} ref={ref}>
        {label}
      </SButton>
    );
  }
);

// forwardRef 함수를 사용하면, 기존에 Button 컴포넌트 이름이 사라진다.
// 그래서, displayName을 Button이라고 재지정해준다.
Button.displayName = "Button";

export default Button;
