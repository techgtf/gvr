import { useState, useEffect } from "react";

const useMediaLoaded = () => {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  useEffect(() => {
    const mediaElements = document.querySelectorAll("img");
    console.log(mediaElements);
    
    if (mediaElements.length === 0) {
      setMediaLoaded(true);
      return;
    }

    let loadedCount = 0;
    const handleMediaLoad = () => {
      loadedCount += 1;
      if (loadedCount === mediaElements.length) {
        setMediaLoaded(true);
      }
    };

    mediaElements.forEach((element) => {
      if (element.complete) {
        handleMediaLoad();
      } else {
        element.addEventListener("load", handleMediaLoad);
        element.addEventListener("error", handleMediaLoad);
      }
    });

    return () => {
      mediaElements.forEach((element) => {
        element.removeEventListener("load", handleMediaLoad);
        element.removeEventListener("error", handleMediaLoad);
      });
    };
  }, []);

  return mediaLoaded;
};

export default useMediaLoaded;
