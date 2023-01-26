import { Flex } from "@chakra-ui/react";

import ButtonFactory, {
  ButtonShapes,
} from "components/buttons.component/button-factory";

type IProp = {
  previewImageUrl: string;
  categoryName: string;
};

export default function PreviewCard({ previewImageUrl, categoryName }: IProp) {
  return (
    <Flex
      align="center"
      justify="center"
      h={"72"}
      w={"md"}
      bgImage={previewImageUrl}
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <ButtonFactory style={ButtonShapes.BUTTON_ALPHA} width={"48"}>
        {categoryName.toUpperCase()}
      </ButtonFactory>
    </Flex>
  );
}
