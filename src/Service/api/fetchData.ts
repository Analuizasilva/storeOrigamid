import  { useState } from "react";

export default function fetchData (url?:string) {
  const [dataR, setData] = useState([]);
    fetch (`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
return dataR
};
