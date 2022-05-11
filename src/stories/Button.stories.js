import Button from "../components/Button";
import plusIcon from "@heroicons/react/solid/esm/PlusIcon";

const ButtonStories = {
  render: (args) => (
    <div className="w-96 gap-6 grid grid-cols-2">
      <Button {...args}>Label</Button>
      <Button icon={plusIcon} {...args}>
        Label
      </Button>
      <Button disabled {...args}>
        Label
      </Button>
      <Button disabled icon={plusIcon} {...args}>
        Label
      </Button>
    </div>
  ),
  component: Button,
};
export default ButtonStories;

export const Primary = {
  args: { type: "primary" },
};

export const Secondary = {
  args: { type: "secondary" },
};

export const Tertiary = {
  args: { type: "tertiary" },
};
