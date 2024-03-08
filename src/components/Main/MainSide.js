import React, { useRef } from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import blobhaikei from "../../assets/circle-scatter-haikei.svg";

const MainSide = () => {
  return (
    <Box
      backgroundImage={blobhaikei}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      w="100%"
      h="100vh"
      p={8}
      color="white"
      textAlign="center"
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Bienvenido
      </Text>
      <Text fontSize="lg">
        Menti gratis y genera el CV para tu Working Holidays.
      </Text>

      <IconButton
        size={"sm"}
        mt={4}
        isRound={true}
        icon={<ArrowDownIcon />}
        variant={"solid"}
      />
    </Box>
  );
};

export default MainSide;
