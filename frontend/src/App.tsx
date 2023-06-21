import { useState, useEffect } from "react";
import callAPI from "./callAPI";
import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
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

  const clearText = (): void => {
    setUserInput("");
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
      <Box p={5}>
        <Grid
          gap={5}
          templateRows={{ sm: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }}
        >
          <GridItem colSpan={{ sm: 1, md: 4 }}>
            <Header />
          </GridItem>

          <GridItem colSpan={{ sm: 1, md: 3 }}>
            <QuestionBox currentQuestion={currentQuestion} />
          </GridItem>

          <GridItem colSpan={{ sm: 1, md: 3 }}>
            <InputBox
              userInput={userInput}
              isLoading={isLoading}
              setUserInput={setUserInput}
              checkAnswer={checkAnswer}
              getNewQuestion={getQuestion}
              clearText={clearText}
            />
          </GridItem>

          <GridItem colSpan={{ sm: 1, md: 3 }}>
            <DisplayBox displayText={displayText} />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
