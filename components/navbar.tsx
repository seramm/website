import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function NavBar() {
  return (
    <Box as="header" paddingY="6" maxWidth="3xl" marginX="auto" paddingX="6">
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        w="75px"
        h="75px"
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <Image
          src="/images/profile.jpg"
          width="100"
          height="100"
          alt="Profile"
        />
      </Box>
    </Box>
  );
}
