import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "select",
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Require = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Require.args = {
  data: [{ comment: "checkBox" }],
};
