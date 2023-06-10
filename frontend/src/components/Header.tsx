import { Flex, Image, Text } from "@chakra-ui/react";

export const Header = () => (
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
);
