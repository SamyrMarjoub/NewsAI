import Head from 'next/head'
import {
  Box, Flex, Text, Divider,
  useColorMode, ButtonGroup, Button, Grid, GridItem,
} from '@chakra-ui/react'
import { data } from './api/data'
import { useRouter } from 'next/router'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
export default function Home() {
  const { toggleColorMode } = useColorMode()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flex position={'relative'} w='foll' h='auto' justifyContent={'center'}>
        <Flex mt={'40px'} width={'90%'}>
          <Box h='full' width={'58%'}>
            <img style={{ borderRadius: '20px' }} width={'100%'} src={'ex1.webp'} />
            <Text fontSize={'17px'} color='whiteAlpha.700' mt={'10px'}>Passou o Obama!</Text>
            <Text lineHeight={'40px'} as='h1' fontSize={'30px'} color={'white'}>Elon Musk vira a pessoa com maior numero de seguidores no Twitter.</Text>
          </Box>
          <Box h='full' display={'flex'} flexDir='column' alignItems={'center'} width={'42%'}>
            <Flex flexDir={'column'} width={'90%'}>
              <Flex width={'100%'}>
                <Box w={'250px'} height='118px' borderRadius={'10px'} backgroundSize='cover' backgroundImage={'ex2.webp'}></Box>
                <Box width={'100%'} alignItems={'center'} display={'flex'}>
                  <Box height={'100%'}>
                    <Text margin={'auto'} ml={'20px'} color={'whiteAlpha.700'}>Confira</Text>
                    <Text margin={'auto'} lineHeight={'25px'} fontWeight='bold' fontSize={'18px'} ml={'20px'}> Celulares do futuro: veja dos 10 modelos mais aguardados para 2024</Text>
                  </Box>


                </Box>

              </Flex>
              <Flex mt='20px' width={'100%'}>
                <Box w={'250px'} height='118px' borderRadius={'10px'} backgroundSize='cover' backgroundImage={'ex3.webp'}></Box>
                <Box width={'100%'} alignItems={'center'} display={'flex'}>
                  <Box height={'100%'}>
                    <Text margin={'auto'} ml={'20px'} color={'whiteAlpha.700'}>Confira</Text>
                    <Text margin={'auto'} lineHeight={'25px'} fontWeight='bold' fontSize={'18px'} ml={'20px'}>iPhone 15 com novo visual e USB-C o que esperar do celular da Apple?</Text>
                  </Box>


                </Box>
              </Flex>
              <Flex mt='20px' width={'100%'}>
                <Box w={'250px'} height='118px' borderRadius={'10px'} backgroundSize='cover' backgroundImage={'ex4.webp'}></Box>
                <Box width={'100%'} alignItems={'center'} display={'flex'}>
                  <Box height={'100%'}>
                    <Text margin={'auto'} ml={'20px'} color={'whiteAlpha.700'}>Já esta jogando?</Text>
                    <Text margin={'auto'} lineHeight={'25px'} fontWeight='bold' fontSize={'18px'} ml={'20px'}>Sucesso! Resident Evil atinge a marca de 3 milhões de copias em 4 dias</Text>
                  </Box>


                </Box>
              </Flex>
            </Flex>

          </Box>
        </Flex>

      </Flex>
      <Flex mt={'10px'} w='100%' alignItems={'center'} display={'flex'} justifyContent='center'>
        <Box justifyContent={'flex-end'} w='90%' alignItems={'center'} display={'flex'}>
          <Divider mr={'15px'} orientation='horizontal' />

          <Box mr={'10px'} width={'30px'} bg='whiteAlpha.300' borderRadius={'20px'} height='30px'
            display={'flex'} justifyContent='center' alignItems={'center'} >
            1
          </Box>
          <Box mr={'10px'} width={'30px'} bg='whiteAlpha.300' borderRadius={'20px'} height='30px'
            display={'flex'} justifyContent='center' alignItems={'center'} bottom={'0%'} color='blue.400'>
            2
          </Box>
          <Box width={'30px'} bg='whiteAlpha.300' borderRadius={'20px'} height='30px'
            display={'flex'} justifyContent='center' alignItems={'center'} bottom={'0%'}>
            3
          </Box>

        </Box>
      </Flex>

      <Flex flexDir={'column'} mt={'10px'} w='100%' alignItems={'center'} display={'flex'} justifyContent='center' >
        <Box h='50px' w='90%'>
          <Flex h='full'>
            <Box display={'flex'} alignItems='center' w='40%'><Text fontSize={'20px'}>Mais Lidas</Text></Box>
            <Box display={'flex'} alignItems='center' w='60%'>
              <ButtonGroup variant='outline' spacing='3'>
                <Button lineHeight={'30px'} h='30px' colorScheme='blue'>Hoje</Button>
                <Button lineHeight={'30px'} h='30px'>Semana</Button>
                <Button lineHeight={'30px'} h='30px'>Mês</Button>

              </ButtonGroup> </Box>

          </Flex>
        </Box>

        <Box w={'90%'} mt='30px'>

          <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            {data.map((data) => {
              return (
                <GridItem onClick={() => router.push(`/news/${data.id}`)} cursor={'pointer'} _hover={{ backgroundColor: 'whiteAlpha.300', transform: "scale(1.03)" }} transition='all 0.2s linear' key={data.id} display={'flex'} w='100%' h='150px'  >

                  <Box w='35%' h='full' borderRadius={'10px'} backgroundRepeat={'no-repeat'} backgroundSize='contain' backgroundImage={data.image}>

                  </Box>
                  <Box ml={'10px'} w='55%'>
                    <Text fontSize={'20px'}>{data.title}</Text>
                    <Text color={'whiteAlpha.700'} fontSize={'17px'}>{data.time}</Text>
                  </Box>
                </GridItem>
              )
            })}


          </Grid>
          <Divider mt={'50px'} />
        </Box>

      </Flex>
      <Footer />
    </>
  )
}
