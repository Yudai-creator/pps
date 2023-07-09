import React from "react";
import Button from "./Button";

const CTA1 = ({
  title,
  resume,
  link1Text,
  link2Text,
  link2Link,
  link1Link,
}: {
  title: string;
  resume: string;
  link1Text: string;
  link2Text: string;
  link1Link: string;
  link2Link: string;
}) => {
  return (
    <div className="flex flex-col h-48  items-center justify-center space-y-3">
      <h2 className="h2">{title}</h2>
      <p>{resume}</p>
      <div className="flex space-x-3">
        {link1Text && (
          <Button type={"primary"} link={link1Link} text={link1Text} />
        )}
        {link2Text && (
          <Button type={"secundary"} link={link2Link} text={link2Text} />
        )}
      </div>
    </div>
  );
};

export default CTA1;
