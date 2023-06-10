import { Box, Text } from "@chakra-ui/react";

interface QuestionBoxProps {
  currentQuestion: string;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  currentQuestion,
}) => (
  <Box
    backgroundColor="whiteAlpha.200"
    mr={60}
    boxShadow="2xl"
    rounded="md"
    bg="white"
    ml={60}
    mb={5}
    minWidth={100}
  >
    <Text>{currentQuestion}</Text>
  </Box>
);
