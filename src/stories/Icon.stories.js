import Icon from "../components/Icon";
import {
  ClipboardListIcon,
  ChatIcon,
  ShareIcon,
} from "@heroicons/react/outline";

const IconStories = {
  render: (args) => (
    <div className="grid grid-cols-6 gap-6">
      {["small", "medium", "large"].map((size) =>
        [false, true].map((disabled) =>
          [ClipboardListIcon, ChatIcon, ShareIcon].map((icon) => (
            <Icon {...args} disabled={disabled} size={size} icon={icon} />
          ))
        )
      )}
    </div>
  ),
  component: Icon,
};
export default IconStories;

export const Primary = {
  args: { type: "primary" },
};

export const Secondary = {
  args: { type: "secondary" },
};

export const Tertiary = {
  args: { type: "tertiary" },
};

export const NoCircle = {
  args: { type: "noCircle" },
};
