import { Abi, encodeFunctionData, parseUnits } from "viem";
import { frames } from "../frames";
import { erc20Abi } from "./contracts/erc20-abi";
import { transaction } from "frames.js/core";
import { XmtpFrameMessageReturnType } from "frames.js/xmtp";
import { baseSepolia } from "viem/chains";

export const POST = frames(async (ctx) => {
  if (!ctx?.message) {
    throw new Error("Invalid frame message");
  }

  let address: `0x${string}`;

  if (ctx.clientProtocol?.id === "xmtp") {
    address = (ctx.message as unknown as XmtpFrameMessageReturnType)
      .verifiedWalletAddress as `0x${string}`;
  } else {
    address = ctx.message.connectedAddress as `0x${string}`;
  }

  // Prepare amount to transfer
  const amount = BigInt(parseUnits("1", 6));

  // Transfering 1 USDC to yourself
  const calldata = encodeFunctionData({
    abi: erc20Abi,
    functionName: "transfer",
    args: [address as `0x${string}`, amount] as const,
  });

  const BASE_SEPOLIA_USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

  return transaction({
    chainId: `eip155:${baseSepolia.id}`, // Base Mainnet 8453
    method: "eth_sendTransaction",
    params: {
      abi: erc20Abi as Abi,
      to: BASE_SEPOLIA_USDC_ADDRESS,
      data: calldata,
      value: "0",
    },
  });
});
