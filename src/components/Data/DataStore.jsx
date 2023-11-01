import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Store = createContext();

function DataStore(props) {
  const [data, setData] = useState([
   
    // {
    //   id: ,
    //   heading: ,
    //   image: ,
    //   description: ,
    //   footer: ,
    //   cat: ,
    //   url: ,
    // },

  ]);
  useEffect(() => {
    axios
      .get("https://blog-api-fetching.onrender.com/api/blog")
      .then((res) => setData(res.data))
      .catch(err => {
       console.log(err.message);
  });
  }, []);
  return (
    <Store.Provider value={[data, setData]}>
      {props.children}
    </Store.Provider>
  );
}

export default DataStore;
