import { useState, useEffect } from "react";
import axios from "axios";
import { DATA_ASSET_URL } from "../../../config";

const useFetchData = (sectionName, pageName = "", limit = 8, appendData = false) => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalLength , setTotalLength] = useState();
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    
    const url = `${DATA_ASSET_URL}${sectionName}${pageName ? `/${pageName}` : ""}${appendData ? `&per_page=${limit}&page=${page}`:"" }`;



    axios
      .get(url)
      .then((response) => {
        let extractedData = response.data.data;
        let TotalLength = response.data.total || response.data.data.total;

        if (extractedData && typeof extractedData === "object" && "data" in extractedData) {
          extractedData = extractedData.data;
        }

        if (!Array.isArray(extractedData)) {
          setData(extractedData); //  Replace for non-array responses
        } else if (appendData && page > 1) {
          setData((prevData) => [...prevData, ...extractedData]); //  Append for paginated lists
        } else {
          setData(extractedData); //  Replace for first fetch
        }

        setTotalLength(TotalLength);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [sectionName, pageName, page]);

  return { data, loading, error, loadMore ,totalLength};
};

export default useFetchData;
