import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";
import { EMAIL_REGEX } from "@constants/regex";
import Text from "../Text/Text";

export default {
  title: "FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

export const Email: ComponentStory<typeof FormInput> = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <div>
      <FormInput
        type="email"
        placeholder="이게 맞는 방법인지 잘 모르겠어요"
        isError={Boolean(errors.email)}
        {...register("email", {
          required: {
            value: true,
            message: "이메일을 입력해주세요",
          },
          pattern: {
            value: EMAIL_REGEX,
            message: "정확한 이메일을 입력해주세요",
          },
        })}
      />
      {errors.email && <Text>{errors.email.message}</Text>}
    </div>
  );
};
