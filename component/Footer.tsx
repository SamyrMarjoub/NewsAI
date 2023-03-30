import { Box,Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box w={'100%'} display='flex' justifyContent={'center'} alignItems='center' mt='50px' bg={"#161b22"} height='150px' as='header'>
    <Text fontSize={'25px'} as={'h4'}>NewsAI 1.1</Text>
  </Box>
  )
}
