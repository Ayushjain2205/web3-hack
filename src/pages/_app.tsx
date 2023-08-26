import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  OptimismGoerli,
  LineaTestnet,
  Ethereum,
  Polygon,
} from "@thirdweb-dev/chains";
import { metamaskWallet, localWallet, paperWallet } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Ethereum}
      clientId="7a96064a5047b6af0b9b1125a11562ca"
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
        paperWallet({
          paperClientId: "7f3a5a69-a739-40cd-b62d-8ef3667a81b8",
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
