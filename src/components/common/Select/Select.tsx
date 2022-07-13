// 라이브러리
import React, { forwardRef } from "react";

import { SelectProps } from "@src/models/select";
import { SLabel, SContent, SInput } from "./Select.style";

const Select = forwardRef(
  ({ data, ...rest }: SelectProps, ref: React.Ref<any>) => {
    return (
      <>
        {data.map((item) => (
          <SLabel key={item.comment}>
            <SInput
              type="checkbox"
              defaultValue={item.comment}
              ref={ref}
              {...rest}
            />
            <SContent>{item.comment}</SContent>
          </SLabel>
        ))}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
