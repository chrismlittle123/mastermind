import { Box, Text } from "@chakra-ui/react";

interface DisplayBoxProps {
  displayText: string;
}

export const DisplayBox: React.FC<DisplayBoxProps> = ({ displayText }) => (
  <Box>
    <Text>{displayText}</Text>
  </Box>
);
