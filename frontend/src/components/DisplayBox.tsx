import { Box, Text } from "@chakra-ui/react";

interface DisplayBoxProps {
  scorePercentage: number;
  checkAnswerMessage: string;
  exampleAnswer?: string;
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({
  scorePercentage,
  checkAnswerMessage,
  exampleAnswer,
}) => (
  <Box>
    <Text>
      Score: {scorePercentage} % - {checkAnswerMessage} <br></br> Example
      Answer: {exampleAnswer}
    </Text>
  </Box>
);
