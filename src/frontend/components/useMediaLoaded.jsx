import { useEffect, useRef, useState } from "react";

function useMediaLoader(timeoutDuration = 8000) { // ⏳ Set max wait time (5s)
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaElements = [
      ...container.querySelectorAll("img"),
      ...container.querySelectorAll("video"),
    ];

    let loadedCount = 0;
    const totalMedia = mediaElements.length;

    if (totalMedia === 0) {
      setIsMediaLoaded(() => true);
      return;
    }

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === totalMedia) {
        setIsMediaLoaded(() => true);
      }
    };

    mediaElements.forEach((media) => {
      if (
        (media instanceof HTMLImageElement && media.complete) ||
        (media instanceof HTMLVideoElement && media.readyState >= 3)
      ) {
        loadedCount++;
      } else {
        media.addEventListener("load", handleLoad);
        media.addEventListener("loadeddata", handleLoad);
        media.addEventListener("error", handleLoad); // Continue even if error occurs
      }
    });

    if (loadedCount === totalMedia) {
      setIsMediaLoaded(true);
    }

    // ⏳ **Timeout Fallback** - Don't wait forever
    const timeout = setTimeout(() => {
      console.warn("Media loading timeout reached. Showing content anyway.");
      setIsMediaLoaded(true); // Show content even if media isn't fully loaded
    }, timeoutDuration);

    return () => {
      clearTimeout(timeout);
      mediaElements.forEach((media) => {
        media.removeEventListener("load", handleLoad);
        media.removeEventListener("loadeddata", handleLoad);
        media.removeEventListener("error", handleLoad);
      });
    };
  }, []);

  return { isMediaLoaded, containerRef };
}

export default useMediaLoader;




































// import { useState, useEffect } from "react";

// const useMediaLoaded = () => {
//   const [mediaLoaded, setMediaLoaded] = useState(false);

//   useEffect(() => {
//     const mediaElements = document.querySelectorAll("img");
//     console.log(mediaElements);

//     if (mediaElements.length === 0) {
//       setMediaLoaded(true);
//       return;
//     }

//     let loadedCount = 0;
//     const handleMediaLoad = () => {
//       loadedCount += 1;
//       if (loadedCount === mediaElements.length) {
//         setMediaLoaded(true);
//       }
//     };

//     mediaElements.forEach((element) => {
//       if (element.complete) {
//         handleMediaLoad();
//       } else {
//         element.addEventListener("load", handleMediaLoad);
//         element.addEventListener("error", handleMediaLoad);
//       }
//     });

//     return () => {
//       mediaElements.forEach((element) => {
//         element.removeEventListener("load", handleMediaLoad);
//         element.removeEventListener("error", handleMediaLoad);
//       });
//     };
//   }, []);

//   return mediaLoaded;
// };

// export default useMediaLoaded;
