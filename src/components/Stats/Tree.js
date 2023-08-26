import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Tree = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/private_files/lf30_din9k7cf.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          This web page emits the amount of carbon that{" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            1 tree{" "}
          </span>{" "}
          absorbs in a year.
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            44kWh{" "}
          </span>{" "}
          of energy That’s enough electricity to drive an electric car{" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            282km.
          </span>
        </h1>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_h03qgmzg.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
      </div>
    </div>
  );
};

export default Tree;
