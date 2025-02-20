import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
function MicrositeMenu() {
  const [active, setActive] = useState("");
  const [isFooterActive, setIsFooterActive] = useState(false);
  const sectionRefs = useRef({});

  const menu = [
    { name: "OVERVIEW", id: "overview" },
    { name: "AMENTITIES", id: "amentities" },
    { name: "PRICE LIST", id: "pricelist" },
    { name: "HIGHLIGHTS & SPECIFICATIONS", id: "highlightsSpecifications" },
    { name: "FLOOR PLAN", id: "plan" },
    { name: "LOCATION ADVANTAGE", id: "advantage" },
    { name: "GALLERY", id: "gallery" },
    { name: "FOOTER", id: "mainfooter" },
  ];
  const location = useLocation(); // Detect the current route/page

  useEffect(() => {
    // Reset active state when component mounts or when the page switches
    setActive("");
    setIsFooterActive(false);

    // Populating the sectionRefs with DOM elements
    menu.forEach((item) => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });

    // Setting up the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id); // Update the active state with the section's id

            if (id === "mainfooter" || id === "overview") {
              setIsFooterActive(true); // Set footer as active
            } else {
              setIsFooterActive(false); // Reset footer active state
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Consider a section active when 50% of it is visible
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect(); // Disconnect the observer to avoid memory leaks
    };
  }, [location]); // Empty dependency array ensures this runs only on mount/unmount

  return (
    <section
      className={`microsite_menu hidden lg:block bg-[#EFF5FA] px-10 py-3 w-full z-10 ${
        isFooterActive ? "hidden" : "fixed bottom-0 left-0"
      }`}
    >
      <ul className="flex flex-wrap justify-evenly items-center text-gray-600 cursor-pointer">
        {menu.map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer ${
              active === item.id ? "text-primary font-semibold" : ""
            }`}
          >
            <Link to={item.id} spy={true} smooth={true} duration={500} offset={-120}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MicrositeMenu;
