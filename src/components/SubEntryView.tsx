import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { EntryContext } from "../context/entryContext";

interface IEntry {
  title: string;
  logo: string;
  text_menual?: string;
}

const SubEntryView: React.FC<IEntry> = ({ title, logo, text_menual }) => {
  const [isLoad, setIsLoad] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 500);
  }, []);

  return (
    <div className="guideEntry">
      <div className="guideEntry__outer">
        <div className="guideEntry__text">
          <h1
            className="guideEntry__textTitle"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h1>
          <strong className="guideEntry__textLogo">{logo}</strong>
          <h2 className="guideEntry__textMenual">{text_menual}</h2>
        </div>
        <div className="guideEntry__arrow">
          <div className="guideEntry__arrow__inner">
            <div className="guideEntry__arrow__inner_arrow"></div>
          </div>
        </div>
        <div className={`guideEntry__deco1 entryDeco ${!isLoad || "load"}`}></div>
        <div className={`guideEntry__deco2 entryDeco ${!isLoad || "load"}`}></div>
        <div className={`guideEntry__deco3 entryDeco ${!isLoad || "load"}`}></div>
      </div>
    </div>
  );
};

export default SubEntryView;
