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
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex flex-col">Current State: {updatedState.count}</div>
        <div tw="flex flex-col">You typed: {inputText}</div>
        <div tw="flex flex-col">You clicked button: {button}</div>
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
