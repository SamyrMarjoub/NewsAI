import React, { useEffect, useState } from 'react'
import Header from '@/component/Header'
import Footer from '@/component/Footer'
import { Box, Text, Button } from '@chakra-ui/react'
import { data } from '../api/data'
import { Image } from '@chakra-ui/react'
import axios from 'axios'
export default function News(postid: { postId: string }) {

    const noticia = data.filter(e => e.id === postid.postId)
    const [texto, setText] = useState("")
    async function add() {
        const res = await axios.get("/api/hello")
        // console.log(res.data.text)
        setText(res.data.text)
    }

    function comeco() {
        var aText = new Array(
            texto
            // "Those who understand binary, and those who don't"
        );
        var iSpeed = 30; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
        // const span = document.createElement("span")
        // span.classList.add("cursor")

        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row

        function typewriter() {
            sContents = ' ';
            iRow = Math.max(0, iIndex - iScrollAt);
            var destination = document.getElementById("typedtext");
            // destination?.append(span)
            while (iRow < iIndex) {
                sContents += aText[iRow++] + '<br />';
            }
            destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
            if (iTextPos++ == iArrLength) {
                iTextPos = 0;
                iIndex++;
                if (iIndex != aText.length) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(typewriter, 500);
                }
            } else {
                setTimeout(typewriter, iSpeed);
            }
        }


        typewriter();
    }

    useEffect(() => {
        if(texto !== "")comeco()
    
    }, [texto])

    return (
        <>
            <Header />
            <Box margin={'auto'} height='auto' width={'90%'}>
                <Text mt={'50px'} as={'h1'} fontSize={'40px'}>{noticia[0].title}</Text>
                <Text color={'whiteAlpha.700'}>{noticia[0].data} ás {noticia[0].hour}</Text>
                <Button onClick={add}>Add</Button>
                <Image mt={'30px'} objectFit={"cover"} src={noticia[0].img1} width='100%' h={'400px'} />
                <Box height={'auto'} mt='30px' >
                   
                    <div>
                        <p style={{ display: 'inline' }} id="typedtext"></p>
                        <span className='cursor'></span>
                    </div>
                </Box>
                {/* <Box mt={'30px'}>
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
                </Box> */}
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