import { Box, Text } from "@chakra-ui/react";

interface DisplayBoxProps {
  displayText: string;
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({ displayText }) => (
  <Box backgroundColor="whiteAlpha.200" boxShadow="2xl" rounded="md" bg="white">
    <Text>{displayText}</Text>
  </Box>
);
