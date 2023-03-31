import puppeteer from 'puppeteer';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let fullTitle: (string | null)[] = []
    try {
        const browser = await puppeteer.launch(); // abre o navegador
        const page = await browser.newPage(); // abre uma nova página

        await page.goto('https://www.infomoney.com.br/negocios/grupo-que-inclui-elon-musk-pede-pausa-em-inteligencia-artificial-cita-riscos-a-sociedade/'); // navega até a URL especificada

        await page.setViewport({ width: 1080, height: 1024 }); // define o tamanho da viewport

        fullTitle = await page.$$eval('.element-border--bottom p', pp => pp.map(p => p.textContent))

        // console.log('The title of this blog post is "%s".', fullTitle);
        // res.status(200).json({ response: fullTitle }); // envia a resposta para o cliente
        await GPT() //GPT entra em ação!
        await browser.close(); // fecha o navegador

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

    async function GPT() {
        let resposta = ""
        if (!configuration.apiKey) console.log("Key não configurada")
        const prompt = fullTitle

        try {

            const promptE = "Voce ira reformular esses textos sem tirar nada do contexto, e sem adicionar nada desnecessario, tudo formatadinho.";

            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system", "content": promptE
                    },
                    { role: "user", "content": generatePrompt(prompt) }
                ],
                max_tokens: 500

            })
            resposta = completion.data.choices[0].message.content.trim()
            console.log(resposta)
            res.json({ text: resposta })
        } catch (error) {
            // Consider adjusting the error handling logic for your use case
            if (error.response) {
                console.error(error.response.status, error.response.data);
            } else {
                console.error(`Error with OpenAI API request: ${error.message}`);
            }
        }

        function generatePrompt(prompt) {
            // const formatado = JSON.strin
            const capitalizedAnimal = prompt
            const promptAtual = `
                  Pergunta: ${capitalizedAnimal}
                  Resposta:`;

            return promptAtual;

        }
    }


}