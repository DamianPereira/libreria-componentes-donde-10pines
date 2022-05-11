import Card, {
  CardHeader,
  CardIconLine,
  CardParagraph,
  CardSubHeader,
} from "../components/Card";
import { LocationMarkerIcon } from "@heroicons/react/outline";

const CardStories = {
  component: Card,
};
export default CardStories;

export const Default = {
  args: {
    children: (
      <>
        <CardHeader>Nombre del establecimiento</CardHeader>
        <CardIconLine icon={LocationMarkerIcon}>Calle 1234, CABA</CardIconLine>
        <CardSubHeader>Servicios disponibles</CardSubHeader>
        <CardParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardParagraph>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
