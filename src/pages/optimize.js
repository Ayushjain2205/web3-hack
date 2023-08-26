import React from "react";
import data from "../utils/data";
import TipCard from "../components/TipCard";
import Link from "next/link";

const optimize = () => {
  return (
    <div className="flex flex-col items-center align justify-center p-16">
      <h1 className="text-3xl font-bold italic text-primary mb-6">
        Tips to optimize your carbon footprint
      </h1>
      <div className="grid grid-cols-3 gap-20">
        {data.map((item) => (
          <TipCard
            name={item.name}
            image={item.image}
            description={item.description}
            categories={item.categories}
            modalData={item.modalData}
            id={item.id}
          />
        ))}
      </div>
      <Link href="/offset">
        <button className="btn btn-primary btn-outline btn-block mt-8">
          Offset Carbon Footprint
        </button>
      </Link>
    </div>
  );
};

export default optimize;
