"use client";
import { parseAbi, parseEther } from "viem";
import { useSendTransaction, useWriteContract } from "wagmi";

export default function WriteContractComp() {
  const { writeContractAsync } = useWriteContract();
    const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  // const abi = parseAbi([
  //   "function approve(address, uint256) returns (bool)",
  //   "function transferFrom(address, address, uint256) returns (bool)",
  // ]);

  const { data, isSuccess, sendTransaction } = useSendTransaction();

  return (
    <button
      className="border-2 px-2"
      onClick={async () => {
        try {
            await writeContractAsync({
              abi,
              address: "0x5A6034D4B34FbaA937F1E5d4A8Ea8820A683D2e9",
              functionName: "transfer",
              args: [
                "0x6bE76e3D11F388720884dfBA16e5dE31475F8B25",
                parseEther("0.01"),
              ],
              // args:{
              // _from:"0x6bE76e3D11F388720884dfBA16e5dE31475F8B25",
              //   _to: '0x6bE76e3D11F388720884dfBA16e5dE31475F8B25',
              //   _value: 0.00001,
              // },
            });

        //   sendTransaction({
        //     to: "0x6bE76e3D11F388720884dfBA16e5dE31475F8B25",
        //     value: parseEther("0.01"),
        //   });

          console.log("transaction done");
        } catch (error) {
          console.error("Transaction failed:", error);
        }
      }}
    >
      Transfer
    </button>
  );
}
