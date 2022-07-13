import React, { forwardRef } from "react";
import { ButtonProps } from "@src/models/button";
import { SButton } from "./Button.style";

// 원래 forwardRef는 컴포넌트에 ref를 부여할때 사용한다.
// Link 태그안에 a 태그는 ref 속성을 갖기 때문에, forwardRef를 사용하게되었다.
const Button = forwardRef(
  ({ children, ...rest }: ButtonProps, ref: React.Ref<any>) => {
    return (
      <SButton {...rest} ref={ref}>
        {children}
      </SButton>
    );
  }
);

// forwardRef 함수를 사용하면, 기존에 Button 컴포넌트 이름이 사라진다.
// 그래서, displayName을 Button이라고 재지정해준다.
Button.displayName = "Button";

export default Button;
