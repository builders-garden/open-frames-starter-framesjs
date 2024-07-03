import { Button } from "frames.js/next";
import { frames } from "./index";

const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Open Frames - Frames.js starter
      </div>
    ),
    textInput: "Type something here",
    buttons: [
      <Button action="link" target={"https://builders.garden"}>
        Link
      </Button>,
      <Button action="post" target={"/post"}>
        Post
      </Button>,
      <Button action="tx" target={"/tx"} post_url={"/tx/success"}>
        Tx
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
