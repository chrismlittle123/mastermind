import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Image,
  Input,
  IconButton
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const App = () => (
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
      <Text>What is a client?</Text>
    </Box>
    <Box
      backgroundColor="whiteAlpha.200"
      mr={60}
      ml={60}
      mb={10}
      minWidth={100}
    >
      <Input maxWidth={600} minWidth={300} height={8} />
      <IconButton
        aria-label="icon"
        icon={<ChevronRightIcon />}
        size="md"
        colorScheme="facebook"
        ml={2}
        mb={1}
        height={8}
      />
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
      <Text>That is correct!</Text>
    </Box>
  </ChakraProvider>
)

export default App