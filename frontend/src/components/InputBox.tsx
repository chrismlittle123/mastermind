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
  <Box backgroundColor="whiteAlpha.200">
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
      height={8}
    />
    <Button
      mt={1}
      maxHeight={8}
      colorScheme="facebook"
      variant="solid"
      onClick={async () => {
        clearText();
        getNewQuestion();
      }}
    >
      Next
      {isLoading && <Spinner ml={2} />}
    </Button>
  </Box>
);
