import { Box, Text } from "@chakra-ui/react";

interface DisplayBoxProps {
  displayText: string;
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({ displayText }) => (
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
);
