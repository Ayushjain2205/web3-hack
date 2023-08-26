import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Weight = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_a7pLM8ebPy.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            16.91kg of CO2{" "}
          </span>
          equivalent. As much CO2 as boiling water for 2,292 cups of tea
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            18 billion bubbles{" "}
          </span>{" "}
          Woah, that’s a lot of bubbles!
        </h1>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_fakgwenv.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
      </div>
    </div>
  );
};

export default Weight;
