import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const offset = () => {
  return (
    <div className="flex flex-row items-center align justify-center p-32">
      <div className="flex flex-col">
        <ul>
          <li className="font-bold italic text-primary">
            TerraPass - https://terrapass.com/
          </li>
          <li className="font-bold italic text-primary">
            CarbonFund - https://carbonfund.org/
          </li>
          <li className="font-bold italic text-primary">
            Cool Effect - https://www.cooleffect.org/
          </li>
          <li className="font-bold italic text-primary">
            NativeEnergy - https://nativeenergy.com/
          </li>
          <li className="font-bold italic text-primary">
            Atmosfair - https://www.atmosfair.de/en/
          </li>
          <li className="font-bold italic text-primary">
            South Pole - https://www.southpole.com/
          </li>
        </ul>
        <p className="w-[400px] mt-16 italic">
          These organizations offer a range of carbon offset projects that you
          can support, and they often provide detailed information on the
          projects and their impact. By choosing a reputable carbon offset
          provider, you can ensure that your efforts to offset shipping
          emissions are effective and transparent.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-around">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_8gviyzwa.json"
          style={{ height: "600px", width: "100%" }}
        ></Player>
        <a
          href="https://treesforlife.org.uk/support/for-businesses/carbon-offsetting/"
          target="_blank"
        >
          <button className="btn btn-primary btn-outline btn-wide mt-4">
            Offset emissions
          </button>
        </a>
      </div>
    </div>
  );
};

export default offset;
