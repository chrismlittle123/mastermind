import { useState, useEffect } from "react";
import callAPI from "./callAPI";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { QuestionBox } from "./components/QuestionBox";
import { InputBox } from "./components/InputBox";
import { DisplayBox } from "./components/DisplayBox";

interface APIResponse {
  question: string;
  message: string;
}

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to get a random question from the backend
  const getQuestion = async (): Promise<void> => {
    const response: APIResponse = await callAPI(
      "https://shielded-dusk-83912.herokuapp.com/getQuestion",
      null
    );
    setCurrentQuestion(response.question);
  };

  // Set an initial random question when the component mounts
  useEffect(() => {
    getQuestion();
  }, []);

  const clearDisplayText = (): void => {
    setDisplayText("");
  };

  // Check the user's answer
  const checkAnswer = async (): Promise<void> => {
    setIsLoading(true);
    const payload = { question: currentQuestion, my_answer: userInput };
    try {
      const response: APIResponse = await callAPI(
        "https://shielded-dusk-83912.herokuapp.com/checkAnswer",
        payload
      );
      setDisplayText(response.message);
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <Box ml={60} mr={60} mb={5}>
        <Header />
      </Box>
      <QuestionBox currentQuestion={currentQuestion} />
      <InputBox
        userInput={userInput}
        isLoading={isLoading}
        setUserInput={setUserInput}
        checkAnswer={checkAnswer}
        getNewQuestion={getQuestion}
        clearDisplayText={clearDisplayText}
      />
      <DisplayBox displayText={displayText} />
    </ChakraProvider>
  );
};

export default App;
