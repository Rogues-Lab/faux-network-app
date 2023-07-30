import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { OpenAI } from 'langchain/llms/openai'
import { LLMChain, loadQAStuffChain } from 'langchain/chains'
import { Document } from 'langchain/document'
import { timeout } from './config'

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { WebBrowser } from "langchain/tools/webbrowser";
import { PromptTemplate } from "langchain/prompts";

import axios, { Method } from 'axios';
import { Browser, Page, PlaywrightWebBaseLoader } from "langchain/document_loaders/web/playwright";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { loadSummarizationChain } from "langchain/chains";
import { SelectorType } from 'cheerio'

export const setUp = async () => {
  const model = new OpenAI({});
  const embeddings = new OpenAIEmbeddings();



  // const tools = [

  //   new Calculator(),
  //   new WebBrowser({ model, embeddings }),
  // ];


  // const executor = await initializeAgentExecutorWithOptions(tools, model, {
  //   agentType: "zero-shot-react-description",
  //   verbose: true,
  // });

  // console.log("Loaded agent.");

  // const input = `Can you extract the main details and topics etc from this story {https://cointelegraph.com/news/sec-gensler-parallels-binance-ftx-sued}`
  // const input2 = `can you web scrape and load the story https://nftevening.com/nfc-lisbon-5-artists-to-watch-at-the-nft-event/`


  // const input3 = `Can you list the news stories including the link to the story with stories from today with subject crypto from news site  https://edition.cnn.com/business`

  // const input4 = `Can you summarise the message in this Twitter post https://twitter.com/functi0nZer0/status/1666584083256811525`

  // console.log(`Executing with input "${input3}"...`);
  // const agentLoadData = await executor.call({ input: input3 });
  // console.log(`Got output ${JSON.stringify(agentLoadData, null, 2)}`);


  // const promptTemplate1 = "I want you to act as a spoken English teacher and improver. I will speak to you in English and you will reply to me in English to practice my spoken English. I want you to keep your reply neat, limiting the reply to 100 words. I want you to strictly correct my grammar mistakes, typos, and factual errors. I want you to ask me a question in your reply. Now let's start practicing, you could ask me a question first. Remember, I want you to strictly correct my grammar mistakes, typos, and factual errors. My first request is: {input}"
  // const promptTemplate2 = "I want you to act as a movie critic. You will develop an engaging and creative movie review. You can cover topics like plot, themes and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pace, dialog. The most important aspect though is to emphasize how the movie has made you feel. What has really resonated with you. You can also be critical about the movie. Please avoid spoilers. My first request is: {input}"
  // const promptTemplate3 = "Seeking guidance from experienced staff with expertise on financial markets , incorporating factors such as inflation rate or return estimates along with tracking stock prices over lengthy period ultimately helping customer understand sector then suggesting safest possible options available where he/she can allocate funds depending upon their requirement & interests ! Starting query: {input}"
  // const promptTemplate4 = "I want you to act as a journalist. You will report on breaking news, write feature stories and opinion pieces, develop research techniques for verifying information and uncovering sources, adhere to journalistic ethics, and deliver accurate reporting. You are summarising: {input}"
  // const promptTemplate5 = "Can you explain this like I'm five with links to the original article? {input}"

  // const input = `Can you extract six news stories for today from these news sites [{name: "Chainsaw", url: "https://thechainsaw.com/"}, {name: "ABC", url: "https://abc.net.au/news"}, {name: "Coindesk", url: "https://coindesk.com/"}]`;





  // const prompt = new PromptTemplate({
  //   template: promptTemplate4,
  //   inputVariables: ["input"],
  // });
  // const prompt1 = await prompt.format({ input: agentLoadData.output });
  // console.log(`Got prompt1 ${prompt1}`);


  // const authorChain = new LLMChain({ llm: model, prompt: prompt, verbose: true });
  // const res1 = await authorChain.call({ input: agentLoadData.output });
  // console.log(`Got output2 ${JSON.stringify(res1, null, 2)}`);

  // const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  // const docs = await textSplitter.createDocuments([text]);

  // // This convenience function creates a document chain prompted to summarize a set of documents.
  // const chain = loadSummarizationChain(model, {
  //   type: "map_reduce",
  //   returnIntermediateSteps: true,
  // });
  // const res = await chain.call({
  //   input_documents: docs,https://app.acquire.com/signin?route=/startup/F3HoMvM2bKUpeV7TpEBZW7q8XkQ2/NrQDpKd1djerhIUOmBHg?hideBackBtn=true
  // });
  // console.log({ res });


  //Stage 1: Get new news articles from sources 


  // let docs: Document[] = [];

  // const source = {name: "Coindesk", url: "https://www.coindesk.com/tag/nfts/", selector: "article-card"}


  // // Load the news stories from the source (LOADS THREE STORIES)
 
  // // Coindesk loader
  // let selector: SelectorType | undefined = ".article-card:first";
  // const loader = new CheerioWebBaseLoader(source.url, {selector})
  // docs = await loader.loadAndSplit();
  // console.log("docs length",docs.length);
  // console.log("docs",docs);

  // selector = ".article-card:eq(1)";
  // const loader2 = new CheerioWebBaseLoader(source.url, {selector})
  // const docs2 = await loader2.loadAndSplit();
  // console.log("docs2 length",docs2.length);
  // console.log("docs2",docs2);

  // selector = ".article-card:eq(2)";
  // const loader3 = new CheerioWebBaseLoader(source.url, {selector})
  // const docs3 = await loader.loadAndSplit();
  // console.log("docs3 length",docs3.length);
  // console.log("docs3",docs3);

  // I think we can use cheerio to get the top three story links from the main page then programmatically load them
  // const today = "Jun 9, 2023" //check the date on the page

  // const story1 = "https://www.coindesk.com/web3/2023/06/08/nft-inspect-introduces-new-pfp-discovery-tool-for-twitter/"
  // const story2 = "https://www.coindesk.com/web3/2023/06/08/kraken-nft-marketplace-launches-with-support-for-ethereum-solana-and-polygon-collections/"
  // const story1 = "https://www.coindesk.com/web3/2023/06/09/louis-vuittons-soulbound-luxury-nfts-apples-expensive-vision/"
  const story2 = "https://www.coindesk.com/learn/what-is-nft-lending/"
  const stories = [story2]
  // console.log("stories",stories);

  // for (const story of stories) {
  //   let selector: SelectorType | undefined = "article";
  //   const loader = new CheerioWebBaseLoader(story, {selector})
  //   let tdoc = await loader.load();
  //   // console.log("tdoc length",tdoc.length);
  //   // console.log("tdoc",tdoc);
  //   docs.push(...tdoc);
  //   // console.log("docs length",docs.length);
  // };

  // // Loaded stories into Documents[]  
  // console.log("aa doc length",docs.length);
  // console.log("qa doc",docs);



  //Stage 2: Extract the main details and topics etc from this story with links to the original article (if possible)
  // // This convenience function creates a document chain prompted to summarize a set of documents.
  // const chain = loadSummarizationChain(model, {
  //   type: "map_reduce",
  //   returnIntermediateSteps: true,
  // });
  // const res = await chain.call({
  //   input_documents: docs,
  // });
  // console.log("res", res );

  // const newsSummary = res?.text;
  // const newsSummary = "NFT Inspect has launched a new Chrome browser extension that allows users to search and analyze NFTs used as profile pictures or shared as tweets on Twitter. The tool uses AI algorithms to detect NFT-related content and can track the popularity of NFT collections and the growth of particular communities around an NFT project. Kraken has now officially launched its NFT marketplace out of its public beta test, supporting over 250 NFTs across the Ethereum, Solana and Polygon blockchains. Kraken NFT marketplace pledges to include not only blue-chip projects but also more affordable collections that can be bought for under $100."

  // stage 1b Collect stats on the Market (top sales etc)
  // can I get top sales 
  // Like proof with indexs ( Bitcoin ordinals)
  // Project Updated

  // const promptScriptTemplate = "I want you to act as a screen writer. You will write scripts on current events and news, write feature stories, develop research techniques for verifying information and uncovering sources, adhere to journalistic ethics, and deliver accurate reporting using your own distinct style. Can you create a 30 second audio script about this {input}"

  // const prompt = new PromptTemplate({
  //   template: promptScriptTemplate,
  //   inputVariables: ["input"],
  // });
  // const prompt1 = await prompt.format({ input: newsSummary });
  // console.log(`Got prompt1 ${prompt1}`);
  // const authorChain = new LLMChain({ llm: model, prompt: prompt, verbose: true });
  // const res1 = await authorChain.call({ input: newsSummary });

  // console.log(`Got output2 ${JSON.stringify(res1, null, 2)}`);

  // const script = res1.text

  // const promptPostAuthorTemplate = "I want you to write a compelling tiktok post describing a video on this topic {input}"
  // const promptT1 = new PromptTemplate({
  //   template: promptPostAuthorTemplate,
  //   inputVariables: ["input"],
  // });
  // const prompt2 = await promptT1.format({ input: newsSummary });
  // console.log(`Got prompt1 ${prompt2}`);
  // const authorChain2 = new LLMChain({ llm: model, prompt: promptT1, verbose: true });
  // const res3 = await authorChain2.call({ input: newsSummary });

  // console.log(`Got output2 ${JSON.stringify(res3, null, 2)}`);

  

  //Stage 3: Summarise the message in this Twitter post with links to the original article (if possible)

  //Stage 4: Extract six news stories for today from these news sites 

  //Stage 5: Create Script for daily recap show with the six news stories

  //Stage 6: Create image prompts and video prompts for daily recap show with the six news stories

  //Stage 7: Create an audio file for daily recap show with the six news stories script

  //Stage 8: Create a video file for daily recap show with the six news stories script and image prompts and video prompts
  // const script = "Are you looking for ways to diversify your Non-Fungible Tokens, or NFTs. With NFTs, you can use more complex financial arrangements such as peer-to-peer lending, peer-to-protocol lending, non-fungible debt positions, and NFT rentals. Platforms like NFTfi, Arcade, BendDAO, Pine, JPEG'd, and reNFT are becoming increasingly popular for these uses. Each platform has different structures and functions, so before you get started, make sure you understand the risks associated with DeFi lending."
  // const options = {
  //   method: 'POST' as Method,
  //   url: 'https://api.d-id.com/talks',
  //   headers: {
  //     accept: 'application/json',
  //     'content-type': 'application/json',
  //      authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoidGFsa3MiLCJodHRwczovL2QtaWQuY29tL2N4X2xvZ2ljX2lkIjoiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQtaWQuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA4Mjk3MDY2Mjk2MzcwNjc1NTIwIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg2NTMxOTIzLCJleHAiOjE2ODY2MTgzMjMsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.WZyi-XL83uWuIHruuv_fuVQvrqVx3qHPENV9kPDLF00IByRqN9R_i1iyBhrHE_rzRTpAx6N35h-MoQqGyRS5YHZJt9utau7S4lTVnwsZ_tTxmLGVlivhbyjLiN-9OMX2NX3Y789phEp4hFcd0995ED6LfTW1rO4Gfjs3S7H_WWExZk8UoKiVKgfM4SqzLllVHSn8PNjWftcUA7f2yRZwMkpgxG_Ni7yhm23Qrx2i3eIG34Ff_uRS7x03jJsGQzm5xhZqp9X3Nbc0F3sJXwUmugQPKIeCPv2G8WHVmB1IKFE3vxJGrCl2gRQSnWkhw22HyC_WDjOSEajlF1eyuEuScw'
  // },
  //   data: {
  //     script: {
  //       type: 'text',
  //       subtitles: 'false',
  //       provider: {type: 'microsoft', voice_id: 'en-AU-TimNeural'},
  //       ssml: 'false',
  //       input: script,
  //     },
  //     config: {fluent: 'false', pad_audio: '0.0',  stitch: true},
  //     source_url: 'https://cdn.discordapp.com/attachments/1012632492236353616/1116608790050132019/darrenrogan.eth_a_trendy_news_reader_on_the_internet_news_show_7226f115-c00f-4f6a-aaf1-0b72f78bc23c.png'
  //   }
  // };
  
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // const exampleTalkResponse = {
  //   id: 'tlk_CoHGXz2WTWBdBC89q_o9B',
  //   created_at: '2023-06-09T02:56:12.739Z',
  //   created_by: 'google-oauth2|108297066296370675520',
  //   status: 'created',
  //   object: 'talk'
  // };

  // const tokenId = 'tlk_g40e3QmKn76L3WiiWPpE3';
  // //Stage 8b: get the video file from D-ID
  // const options1 = {
  //   method: 'GET' as Method,
  //   url: 'https://api.d-id.com/talks/' + tokenId,
  //   headers: {
  //     accept: 'application/json',
  //     authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik53ek53TmV1R3ptcFZTQjNVZ0J4ZyJ9.eyJodHRwczovL2QtaWQuY29tL2ZlYXR1cmVzIjoidGFsa3MiLCJodHRwczovL2QtaWQuY29tL2N4X2xvZ2ljX2lkIjoiIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmQtaWQuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA4Mjk3MDY2Mjk2MzcwNjc1NTIwIiwiYXVkIjpbImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImh0dHBzOi8vZC1pZC51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjg2NTMxOTIzLCJleHAiOjE2ODY2MTgzMjMsImF6cCI6Ikd6ck5JMU9yZTlGTTNFZURSZjNtM3ozVFN3MEpsUllxIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIG9mZmxpbmVfYWNjZXNzIn0.WZyi-XL83uWuIHruuv_fuVQvrqVx3qHPENV9kPDLF00IByRqN9R_i1iyBhrHE_rzRTpAx6N35h-MoQqGyRS5YHZJt9utau7S4lTVnwsZ_tTxmLGVlivhbyjLiN-9OMX2NX3Y789phEp4hFcd0995ED6LfTW1rO4Gfjs3S7H_WWExZk8UoKiVKgfM4SqzLllVHSn8PNjWftcUA7f2yRZwMkpgxG_Ni7yhm23Qrx2i3eIG34Ff_uRS7x03jJsGQzm5xhZqp9X3Nbc0F3sJXwUmugQPKIeCPv2G8WHVmB1IKFE3vxJGrCl2gRQSnWkhw22HyC_WDjOSEajlF1eyuEuScw'
  //   }
  // };
  
  // axios
  //   .request(options1)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  //  const exampleResult = {
  //     user: {
  //       features: [
  //         'stitch',
  //         'no-watermark',
  //         'clips:write',
  //         'api-keys:write',
  //         'talks'
  //       ],
  //       stripe_customer_id: 'cus_NeHzGUVddddWVqm',
  //       authorizer: 'bearer',
  //       org_id: null,
  //       owner_id: 'google-oauth2|108297ddd370675520',
  //       id: 'google-oauth2|1082970662963ddd5520',
  //       plan: 'deid-pro',
  //       email: 'darren@proroute.co'
  //     },
  //     script: {
  //       ssml: false,
  //       subtitles: false,
  //       type: 'text',
  //       provider: { type: 'microsoft', voice_id: 'en-US-JennyNeural' }
  //     },
  //     metadata: {
  //       driver_url: 'bank://lively/driver-03/original',
  //       mouth_open: false,
  //       num_faces: 1,
  //       num_frames: 81,
  //       processing_fps: 37.836782397394586,
  //       resolution: [ 512, 512 ],
  //       size_kib: 756.720703125
  //     },
  //     audio_url: 'https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C108297066296370675520/tlk_CoHGXz2WTWBdBC89q_o9B/microsoft.wav?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1686365772&Signature=%2F%2Fr3ydNFVrPVAOryzDtZUr38p9A%3D&X-Amzn-Trace-Id=Root%3D1-648294cb-41071e96313bae6a22f415f5%3BParent%3D5f6202893a3967f4%3BSampled%3D0%3BLineage%3Da08e19fe%3A0',
  //     created_at: '2023-06-09T02:56:12.739Z',
  //     face: {
  //       mask_confidence: -1,
  //       detection: [ 205, 115, 504, 552 ],
  //       overlap: 'no',
  //       size: 618,
  //       top_left: [ 45, 25 ],
  //       face_id: 0,
  //       detect_confidence: 0.9987131357192993
  //     },
  //     config: {
  //       stitch: false,
  //       pad_audio: 0,
  //       align_driver: true,
  //       sharpen: true,
  //       reduce_noise: false,
  //       auto_match: true,
  //       normalization_factor: 1,
  //       logo: { url: 'ai', position: [Array] },
  //       motion_factor: 1,
  //       result_format: '.mp4',
  //       fluent: false,
  //       align_expand_factor: 0.3
  //     },
  //     source_url: 'https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C108297066296370675520/tlk_CoHGXz2WTWBdBC89q_o9B/source/noelle.jpeg?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1686365772&Signature=xk0dTvDcyrjttJMqQHsmbjEsmjM%3D&X-Amzn-Trace-Id=Root%3D1-648294cb-41071e96313bae6a22f415f5%3BParent%3D5f6202893a3967f4%3BSampled%3D0%3BLineage%3Da08e19fe%3A0',
  //     created_by: 'google-oauth2|108297066296370675520',
  //     status: 'done',
  //     driver_url: 'bank://lively/',
  //     modified_at: '2023-06-09T02:57:25.079Z',
  //     user_id: 'google-oauth2|108297066296370675520',
  //     subtitles: false,
  //     id: 'tlk_CoHGXz2WTWBdBC89q_o9B',
  //     duration: 3.25,
  //     started_at: '2023-06-09T02:57:22.879',
  //     result_url: 'https://d-id-talks-prod.s3.us-west-2.amazonaws.com/google-oauth2%7C108297066296370675520/tlk_CoHGXz2WTWBdBC89q_o9B/1686279372739.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1686365845&Signature=f25hgNi4C9SP43IUqh8qY%2FZPPp8%3D&X-Amzn-Trace-Id=Root%3D1-64829515-7ef71da035552e164913c421%3BParent%3D14e8e63c60f3e0a1%3BSampled%3D1%3BLineage%3D6b931dd4%3A0'
  //   }
    


  //Stage 9: Upload the video file to YouTube (repurpose for other platforms)



  return true;

};
