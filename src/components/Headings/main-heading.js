import React from "react";
import { TextGenerateEffect } from "../ui/textgenerateEffect";

export default function MainHeading({
  heading = "MARVEL",
  subheading = "Some matter",
  content = "",
  headingClass = "text-red font-semibold",
  subHeadingClass = "text-dark text-3xl font-semibold sm:text-4xl",
}) {
  return (
    <div className={"max-w-xl text-center space-y-3"}>
      <h3 className={headingClass}>{heading}</h3>
      <div className={subHeadingClass}>
        <TextGenerateEffect words={subheading} />
      </div>
      <div>
        <TextGenerateEffect words={content} />
      </div>
    </div>
  );
}
