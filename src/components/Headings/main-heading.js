import React from "react";
import { TextGenerateEffect } from "../ui/textgenerateEffect";

export default function MainHeading({
  heading = "MARVEL",
  subheading = "Some matter",
  content = "",
  headingClass = "text-red font-semibold uppercase",
  subHeadingClass = "text-dark",
  contentClass = "text-[14px] md:text-[15px]",
}) {
  return (
    <div className={"max-w-xl text-center space-y-3"}>
      <h3 className={headingClass}>{heading}</h3>
      <div className={`${subHeadingClass} text-3xl font-semibold sm:text-4xl`}>
        <TextGenerateEffect words={subheading} />
      </div>
      <div className={contentClass}>
        <TextGenerateEffect words={content} />
      </div>
    </div>
  );
}
