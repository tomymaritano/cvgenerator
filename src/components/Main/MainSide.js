import React from 'react'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

const MainSide = () => {
  return (
    <Box
      bgColor={'#171717'}
      w="100%"
      h="60vh"
      p={8}
      color="white"
      textAlign="center"
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
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
        size={'sm'}
        mt={4}
        isRound={true}
        icon={<ArrowDownIcon />}
        variant={'solid'}
      />
    </Box>
  )
}

export default MainSide
