import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  const inputText = ctx.message?.inputText;
  const button = ctx.message?.buttonIndex;

  const currentState = ctx.state;
  // Update the state every time user clicks the button and visit this frame
  const updatedState = {
    ...currentState,
    count: currentState.count + 1,
  };
  const address = (await ctx.walletAddress()) || "No address";
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">Current State: {updatedState.count}</div>
        <div tw="flex">You typed: {inputText}</div>
        <div tw="flex">You clicked button: {button}</div>
        <div tw="flex">Your address: {address}</div>
      </div>
    ),
    buttons: [
      <Button action="post" target={"/"}>
        Back
      </Button>,
    ],
    state: updatedState,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
