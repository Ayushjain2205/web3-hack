import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Comparision = () => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_I6xrTDC9dt.json"
        style={{ height: "600px", width: "100%" }}
      ></Player>
      <h1 className="w-2/3 text-4xl text-primary italic">
        {" "}
        This web page is cleaner than
        <span className="badge badge-secondary badge-lg text-6xl text-primary">
          83 %
        </span>{" "}
        of web pages tested!
      </h1>
    </div>
  );
};

export default Comparision;
