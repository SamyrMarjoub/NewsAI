import { Box, Flex, ListItem, UnorderedList,Text, Icon, Input} from '@chakra-ui/react'
import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'
export default function Header() {
    const router = useRouter()
    return (
        <Flex justifyContent={'center'} as={'header'} h='70px' w='full' bg='#161b22'>
            <Box w='90%' alignItems={'center'} h='full' display={'flex'}>
                <Box w='50%' alignItems={'center'} display={'flex'}>
                    <Text fontSize={'30px'} color={'white'} as={'h3'} onClick={()=>router.push("/")} cursor='pointer'>NewsAI</Text>
                    <UnorderedList ml={'30px'} display={'inline-block'}>
                        <ListItem p='3' display={'inline'} color={'white'}>Últimas noticias</ListItem>
                        <ListItem p='3' display={'inline'} color={'white'}>Mais lídas</ListItem>
                        <ListItem p='3' display={'inline'} color={'white'}>Sobre NewsAI</ListItem>

                    </UnorderedList>
                </Box>
                <Box display={'flex'} justifyContent='flex-end' w={'50%'} alignItems={'center'}>

                    <Box position={'relative'} display='flex' justifyContent={'space-between'}>
                        <Icon position={'absolute'} left='13px' top='10px' as={FaSearch} />
                        <Input pl='35px' pb='1.5px' _placeholder={{ color: 'whiteAlpha.700' }} placeholder='Digite o que você procura..' fontSize={'14px'} h='35px' width={'300px'} type='search' />
                        <Box ml={'15px'} borderRadius='20px' display={'flex'} justifyContent='center' alignItems={'center'} w={'35px'} height='35px' bg='whiteAlpha.300'>
                            <Icon as={BsFillMoonFill} />
                        </Box>
                    </Box>


                    {/* <Button fontSize={'12px'} w='80px' bg='blue.700' ml='10px' h='30px'>Sign In</Button> */}
                </Box>
            </Box>
        </Flex>
    )
}
