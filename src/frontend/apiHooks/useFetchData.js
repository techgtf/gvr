import { useState, useEffect } from "react";
import axios from "axios";
import { DATA_ASSET_URL } from "../../../config";
const useFetchData = (sectionName, pageName="") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${DATA_ASSET_URL}${sectionName}/${pageName}`) // Dynamic API
      .then((response) => {
        setData(response.data.data);
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

