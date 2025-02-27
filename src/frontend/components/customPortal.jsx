import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const CustomPortal = ({ children }) => {
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    let container = document.getElementById("portal-root");

    if (!container) {
      container = document.createElement("div");
      container.id = "portal-root";
      document.body.appendChild(container);
    }

    setPortalRoot(container);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};

export default CustomPortal;
