import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";
import { EMAIL_REGEX } from "../../../../constants/regex";
import Text from "../Text/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormInput> = (args) => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });
  const email = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해주세요",
    },
    pattern: {
      value: EMAIL_REGEX,
      message: "정확한 이메일을 입력해주세요",
    },
  });
  return (
    <div>
      <FormInput
        {...args}
        {...email}
        isError={Boolean(errors.email)}
        placeholder="아이디(이메일)"
      />
      {errors.email && <Text>{errors.email.message}</Text>}
    </div>
  );
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "아이디(이메일)",
};
