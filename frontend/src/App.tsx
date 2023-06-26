import { useState, useEffect } from "react";
import callAPI from "./callAPI";
import { ChakraProvider, Box, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { QuestionBox } from "./components/QuestionBox";
import { InputBox } from "./components/InputBox";
import { DisplayBox } from "./components/DisplayBox";

interface GetQuestionResponse {
  question_id: number;
  question: string;
  example_answer: string;
  topic: string;
  points: number;
}

interface CheckAnswerResponse {
  is_correct: boolean;
  score_percentage: number;
  message: string;
}

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [displayText, setDisplayText] = useState<CheckAnswerResponse>({
    is_correct: false,
    score_percentage: 0,
    message: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState<GetQuestionResponse>({
    question_id: 0,
    question: "",
    example_answer: "",
    topic: "",
    points: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to get a random question from the backend
  const getQuestion = async (): Promise<void> => {
    const response: GetQuestionResponse = await callAPI(
      "http://mastermindapi-env.eba-jmbgah2n.eu-west-2.elasticbeanstalk.com/getQuestion",
      null
    );
    setCurrentQuestion(response);
  };

  // Set an initial random question when the component mounts
  useEffect(() => {
    getQuestion();
  }, []);

  const clearText = (): void => {
    setUserInput("");
    setDisplayText({
      is_correct: false,
      score_percentage: 0,
      message: "",
    });
  };

  // Check the user's answer
  const checkAnswer = async (): Promise<void> => {
    setIsLoading(true);
    const payload = {
      question_id: currentQuestion.question_id,
      my_answer: userInput,
    };
    try {
      const response: CheckAnswerResponse = await callAPI(
        "http://mastermindapi-env.eba-jmbgah2n.eu-west-2.elasticbeanstalk.com/checkAnswer",
        payload
      );
      setDisplayText(response);
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
            <QuestionBox
              points={currentQuestion.points}
              topic={currentQuestion.topic}
              currentQuestion={currentQuestion.question}
            />
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
            <DisplayBox
              scorePercentage={displayText.score_percentage}
              checkAnswerMessage={displayText.message}
              exampleAnswer={
                displayText.message ? currentQuestion.example_answer : undefined
              }
            />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
