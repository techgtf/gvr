import React from "react";

export default function commonPera({
  TagName = "p",
  PeraClass = "",
  PeraText = "",
}) {
  return (
    <TagName className={`common_pera text-[#141414] ${PeraClass}`}>
      {PeraText || "Great Value Realty"}
    </TagName>
  );
}
