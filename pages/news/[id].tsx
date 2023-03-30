import React, { useEffect } from 'react'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import { Box, Text } from '@chakra-ui/react'
import { data } from '../api/data'
import { Image } from '@chakra-ui/react'
export default function News(postid: { postId: string }) {

    const noticia = data.filter(e => e.id === postid.postId)
   

    return (
        <>
            <Header />
            <Box margin={'auto'} height='auto' width={'90%'}>
                <Text mt={'50px'} as={'h1'} fontSize={'40px'}>{noticia[0].title}</Text>
                <Text color={'whiteAlpha.700'}>{noticia[0].data} ás {noticia[0].hour}</Text>
                <Image mt={'30px'} objectFit={"cover"} src={noticia[0].img1} width='100%' h={'400px'} />
                <Box maxWidth={'100%'}  className='chatgpt-container' mt='30px' >
                    <Text  className="typewriter">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer <strong>took a galley of type and scrambled it to make a type specimen book</strong>.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</Text>
                </Box>
                <Box mt={'30px'}>
                    <Text>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source.</Text>
                </Box>
                <Image mt={'30px'} objectFit='fill' src={noticia[0].img2} width='100%' height={'400px'} />
                <Text color={'whiteAlpha.700'} mt='10px' fontSize={'13px'}>O ChatGPT tinha 100 milhões de usuários dois meses após o lançamento.</Text>
                <Box mt={'30px'}>
                    <Text>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it look like readable English.
                    </Text>
                </Box>
                <Box mt={'20px'}>
                    <Text fontSize={'25px'}><b>At vero eos et accusamus et?</b></Text>
                    <Text mt={'20px'}>
                        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                        placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </Text>
                    <Text mt={'20px'}>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                    </Text>
                </Box>
            </Box>
            <Footer />

        </>

    )
}


export async function getServerSideProps(context: { params: { id: any } }) {
    const postId = context.params.id; // acessa o valor do parâmetro dinâmico 'id'

    console.log(postId)
    return {
        props: {
            postId,
        },
    };
}