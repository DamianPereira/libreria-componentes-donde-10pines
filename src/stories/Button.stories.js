import Button from "../components/Button";

export default {
  component: Button,
};

export const Primary = {
  args: { children: "Buscar", primary: true },
};

export const Outline = {
  args: { children: "Explorar todos los servicios", outline: true },
};

export const Secondary = {
  args: { children: "Buscar", secondary: true },
};

export const ListButton = {
  args: {
    children: "Preservativos",
    list: true,
  },
};
