import React from "react";

export default function commonPera({
  TagName = "p",
  PeraClass = "",
  PeraText = "",
}) {
  return (
    <TagName className={`common_pera ${PeraClass}`}>
      {PeraText || "Great Value Realty"}
    </TagName>
  );
}
