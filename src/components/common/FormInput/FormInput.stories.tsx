import { EMAIL_REGEX } from "@constants/regex";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/FormInput",
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormInput> = (args) => {
  return <FormInput {...args} />;
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
  type: "email",
  placeholder: "아이디(이메일)",
  isError: false,
};
