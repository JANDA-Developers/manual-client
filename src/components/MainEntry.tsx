import React, { useState, useLayoutEffect } from "react";

interface IEntry {
  title: string;
  logo: string;
  text_menual?: string;
}

const MainEntry: React.FC<IEntry> = ({ title, logo, text_menual }) => {
  const [isLoad, setLoad] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".guideEntry__text_logo")
        ?.classList.add("mounted");
      setLoad(true);
    }, 500);
  });

  return (
    <div className="guideEntry">
      <div className="guideEntry__outer">
        <div className="guideEntry__text">
          <h1
            className="guideEntry__text_title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h1>
          <strong className="guideEntry__text_logo">{logo}</strong>
          <h2 className="guideEntry__text_menual">{text_menual}</h2>
        </div>
        <div
          className={`guideEntry__deco1 entryDeco ${!isLoad || "load"}`}
        ></div>
        <div
          className={`guideEntry__deco2 entryDeco ${!isLoad || "load"}`}
        ></div>
        <div
          className={`guideEntry__deco3 entryDeco ${!isLoad || "load"}`}
        ></div>
      </div>
    </div>
  );
};

export default MainEntry;
