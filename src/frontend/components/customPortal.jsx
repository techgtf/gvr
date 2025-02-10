import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const CustomPortal = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    let container = document.getElementById("portal-root");

    // If portal root doesn't exist, create it
    if (!container) {
      container = document.createElement("div");
      container.id = "portal-root";
      document.body.appendChild(container);
    }

    setPortalRoot(container);

    return () => {
      // Ensure safe cleanup
      if (container && document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  if (!portalRoot) return null; // Prevent errors before mounting

  return ReactDOM.createPortal(children, portalRoot);
};

export default CustomPortal;
