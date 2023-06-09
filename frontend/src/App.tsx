import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";

async function callAPI(endpoint: string, payload: any): Promise<any> {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(endpoint, requestOptions);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");

  // Function to get a random question from the array
  const getQuestion = async () => {
    const response = await callAPI("http://localhost:8000/getQuestion", null);
    return response.question;
  };

  // Set an initial random question when the component mounts
  useEffect(() => {
    (async () => {
      const question = await getQuestion();
      setCurrentQuestion(question);
    })();
  }, []);

  // Check the user's answer
  const checkAnswer = async () => {
    const payload = { question: currentQuestion, my_answer: userInput };
    const response = await callAPI(
      "http://localhost:8000/checkAnswer",
      payload
    );
    setDisplayText(response.message);
  };

  return (
    <ChakraProvider resetCSS>
      <Box ml={60} mr={60} mb={5}>
        <Flex>
          <Text fontSize="3xl" fontWeight="bold" color="#000000" mt={10}>
            MasterMind
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
            const question = await getQuestion();
            setCurrentQuestion(question);
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
        pt={2}
        pb={2}
        mb={10}
        minWidth={100}
      >
        <Text ml={5} mr={5}>
          {displayText}
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;
