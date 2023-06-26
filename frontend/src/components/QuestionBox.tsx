import { Box, Text } from "@chakra-ui/react";

interface QuestionBoxProps {
  points: number;
  topic: string;
  currentQuestion: string;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  points,
  topic,
  currentQuestion,
}) => (
  <Box>
    <Text>
      {points} - {topic} <br></br> <br></br>
      {currentQuestion}
    </Text>
  </Box>
);
