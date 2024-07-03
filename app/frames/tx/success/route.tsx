import { Button } from "frames.js/next";
import { frames } from "../../frames";

const handleRequest = frames(async (ctx) => {
  const inputText = ctx.message?.inputText;
  const button = ctx.message?.buttonIndex;
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex flex-col">Successfully transfered 1 USDC</div>
      </div>
    ),
    buttons: [
      <Button action="post" target={"/"}>
        Back
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
