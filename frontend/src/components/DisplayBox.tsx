import { Box, Text } from "@chakra-ui/react";

interface DisplayBoxProps {
  displayText: string;
  exampleAnswer?: string;
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({
  displayText,
  exampleAnswer,
}) => (
  <Box>
    <Text>
      {displayText} <br></br> <br></br> {exampleAnswer}
    </Text>
  </Box>
);
