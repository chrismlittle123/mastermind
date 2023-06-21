import { Box, Text } from "@chakra-ui/react";

interface QuestionBoxProps {
  currentQuestion: string;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  currentQuestion,
}) => (
  <Box backgroundColor="whiteAlpha.200" boxShadow="2xl" rounded="md" bg="white">
    <Text>{currentQuestion}</Text>
  </Box>
);
