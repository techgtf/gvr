import { useState, useEffect } from "react";
import axios from "axios";
import { DATA_ASSET_URL } from "../../../config";
const useFetchData = (sectionName, pageName="") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}${sectionName}${pageName ? `/${pageName}` : ""}`)
      .then((response) => {
        let extractedData = response.data.data;
  
        // If extractedData is an object and contains another 'data', extract it
        // if (extractedData && typeof extractedData === "object" && "data" in extractedData) if you need for object use this
        if (extractedData && "data" in extractedData) {
          extractedData = extractedData.data;
        }
  
        setData(extractedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [sectionName, pageName]); // Runs when these change

  return { data, loading, error };
};

export default useFetchData;

