import React, { useEffect, useState } from "react";
import { useExcelDownloder } from "react-xls";

const ExportComponent = ({ savedJokes }) => {
  const { ExcelDownloder, Type } = useExcelDownloder();
  const [jokesArray, setJokesArray] = useState([]);

  useEffect(() => {
    const newArray = savedJokes;
    newArray.forEach(function (d) {
      d.categories = "";
    });
    setJokesArray(newArray);
  }, [savedJokes]);

  const data = {
    Jokes1: jokesArray,
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <ExcelDownloder data={data} filename={"jokes"} type={Type.Button}>
        Download
      </ExcelDownloder>
    </div>
  );
};

export default ExportComponent;
