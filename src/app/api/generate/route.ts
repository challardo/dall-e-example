import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.error();
  }

  const response = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "512x512",
  });

  return NextResponse.json({ url: response.data.data[0].url }, { status: 200 });

  //NOTE: FOR TESTING PURPOSES WHEN OPENAPI_API_KEY IS NOT VALID
  //   return NextResponse.json(
  //     {
  //       url: "https://cdn.openai.com/labs/images/An%20oil%20pastel%20drawing%20of%20an%20annoyed%20cat%20in%20a%20spaceship.webp?v=1",
  //     },
  //     { status: 200 }
  //   );
}
