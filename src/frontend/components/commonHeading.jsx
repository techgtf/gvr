import React from "react";

export default function CommonHeading({
  TagName = "h2",
  HeadingClass = "",
  HeadingText = "",
}) {
  return (
    <TagName
      className={`common_heading midlandfontmedium uppercase ${HeadingClass} `}
    >
      {HeadingText || "Great Value Realty"}
    </TagName>
  );
}
