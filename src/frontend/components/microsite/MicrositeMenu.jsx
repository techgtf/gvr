import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

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

  useEffect(() => {
    menu.forEach((item) => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);

            if (id === "mainfooter") {
              setIsFooterActive(true);
            } else if (id === "overview") {
              setIsFooterActive(true);
            }

            else {
              setIsFooterActive(false);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Consider a section active when 50% of it is in view
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
    className="hidden"
    //   className={`microsite_menu hidden sm:block bg-[#EFF5FA] px-10 py-3 w-full z-10 ${
    //     isFooterActive ? "hidden" : "fixed bottom-0 left-0"
    //   }`
    // }
    >
      <ul className="flex flex-wrap justify-evenly items-center text-gray-600 cursor-pointer">
        {menu.map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer ${active === item.id ? "text-primary font-semibold" : ""
              }`}
          >
            <Link to={item.id} spy={true} smooth={true} duration={500}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MicrositeMenu;
