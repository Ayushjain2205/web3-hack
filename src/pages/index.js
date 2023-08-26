import { Player } from "@lottiefiles/react-lottie-player";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex w-full flex-row justify-around">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_fzqgqxxw.json"
          style={{ height: "600px", width: "100%" }}
        ></Player>
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_TXBESKCamC.json"
          style={{ height: "600px", width: "100%" }}
        ></Player>
      </div>
      <h1 className="w-2/3 text-4xl text-primary italic">
        Clean up your carbon footprint,
        <span className="font-bold underline text-6xl">
          one shipment at a time.
        </span>{" "}
      </h1>
      <br />
      <h1 className="w-2/3 text-4xl text-primary italic">
        Small changes for big impact – carbon clean your shipping.
      </h1>
      <Link href="/find">
        <button className="btn btn-primary btn-outline btn-wide mt-4">
          Let's go!
        </button>
      </Link>
    </main>
  );
}
