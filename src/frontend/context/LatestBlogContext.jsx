import { createContext, useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { DATA_ASSET_URL } from "../../../config";

export const LatestBlogContext = createContext();

const LatestBlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); // State to store blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch blog data from the API when the component mounts
    axios
      .get(`${DATA_ASSET_URL}top-blog`) // API endpoint
      .then((response) => {
        setBlogs(response.data.data); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error message if the request fails
        setLoading(false); // Set loading to false if there’s an error
      });
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <LatestBlogContext.Provider value={{ latestBlog: blogs, loading, error }}>
      {children}
    </LatestBlogContext.Provider>
  );
};

export default LatestBlogProvider;
