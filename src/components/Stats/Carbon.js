import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Comparision = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 items-center">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_vwoauv0p.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          Only{" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary">
            0.14 g of CO2
          </span>{" "}
          is produced every time someone visits this web page.
        </h1>
      </div>
      <div className="flex flex-row gap-0  items-center">
        <h1 className="w-2/3 text-4xl text-primary italic">
          {" "}
          This web page appears to be running on{" "}
          <span className="badge badge-secondary badge-lg text-6xl text-primary mt-2">
            sustainable energy
          </span>
        </h1>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/private_files/lf30_p6kiqhxf.json"
          style={{ height: "300px", width: "100%" }}
        ></Player>
      </div>
    </div>
  );
};

export default Comparision;
