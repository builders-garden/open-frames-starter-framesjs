import { Button } from "frames.js/next";
import { frames } from "./../index";

const handleRequest = frames(async (ctx) => {
  const inputText = ctx.message?.inputText;
  const button = ctx.message?.buttonIndex;
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex flex-col">You typed: {inputText}</div>
        <div tw="flex flex-col">You clicked button: {button}</div>
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
