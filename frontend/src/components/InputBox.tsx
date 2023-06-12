import { Box, Input, Button, Spinner } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent } from "react";

interface InputBoxProps {
  userInput: string;
  isLoading: boolean;
  setUserInput: (value: string) => void;
  checkAnswer: () => Promise<void>;
  getNewQuestion: () => Promise<void>;
  clearText: () => void;
}

export const InputBox: React.FC<InputBoxProps> = ({
  userInput,
  isLoading,
  setUserInput,
  checkAnswer,
  getNewQuestion,
  clearText,
}) => (
  <Box backgroundColor="whiteAlpha.200" mr={60} ml={60} mb={10} minWidth={100}>
    <Input
      value={userInput}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setUserInput(e.target.value)
      }
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === "Enter") {
          checkAnswer();
        }
      }}
      maxWidth={600}
      minWidth={300}
      height={8}
    />
    <Button
      ml={5}
      mb={1}
      maxHeight={8}
      colorScheme="facebook"
      variant="solid"
      onClick={async () => {
        await checkAnswer();
        clearText();
        getNewQuestion();
      }}
    >
      Next
      {isLoading && <Spinner ml={2} />}
    </Button>
  </Box>
);
