import React, { useState, useEffect } from "react";
import Axios from "axios";
import Link from "next/link";

const find = () => {
  const [searchString, setSearchString] = useState([]);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `api/scrape?searchString=${searchString}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center align justify-center min-h-screen ">
      <iframe
        className="w-full h-screen "
        src="https://intermodal.climatiq.io/"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default find;
