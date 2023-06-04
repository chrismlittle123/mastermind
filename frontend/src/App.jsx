import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [displayText, setDisplayText] = useState("That is correct!");

  const questions = [
    "What is sepsis?",
    "Why are you gay?",
    "What is JavaScript?",
    "What is a CPU?",
    "What is AI?",
    // Add as many questions as you'd like...
  ];

  const [currentQuestion, setCurrentQuestion] = useState("");

  // Function to get a random question from the array
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  // Set an initial random question when the component mounts
  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Box ml={60} mr={60} mb={5}>
        <Flex>
          <Text fontSize="3xl" fontWeight="bold" color="#000000" mt={10}>
            BrainQuiz
          </Text>
          <Image
            height={8}
            width={8}
            src="https://www.svgrepo.com/show/404878/brain.svg"
            ml={3}
            mt={12}
          />
        </Flex>
      </Box>
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
      <Box
        backgroundColor="whiteAlpha.200"
        mr={60}
        ml={60}
        mb={10}
        minWidth={100}
      >
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setDisplayText(userInput);
              setUserInput("");
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
          onClick={() => {
            setDisplayText(userInput);
            setUserInput("");
            setCurrentQuestion(getRandomQuestion());
          }}
        >
          Next
        </Button>
      </Box>
      <Box
        backgroundColor="whiteAlpha.200"
        mr={60}
        boxShadow="2xl"
        rounded="md"
        bg="white"
        ml={60}
        mb={10}
        minWidth={100}
      >
        <Text>{displayText}</Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;
