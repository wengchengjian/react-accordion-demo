import React, { useState } from "react";

type IProps = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: IProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setActive((active) => !active)}
        >
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
};
export default Accordion;
