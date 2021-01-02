import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../scss/guide/guideHome.scss";
import { EntryContext } from "../context/entryContext";
import { dataEntry } from "../data/dataCommon"
import HomeBlock from "./HomeBlock";

const HomeIndex: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { pathChkUpdate } = useContext(EntryContext);

  useEffect(() => {
    // pathChkUpdate();
    setLoading(true);
  }, []);

  return (
    <div className="home">
      <div className={`home__bgWrap ${loading && 'off'}`}>
        <div className="home__bgText">
          <h1 className="home__bgTitleWrap">
            <span className="home__bgTitle">대한민국 1등 <br />클라우드·핀테크 기반 예약솔루션</span>
            <span className="home__bgSubTitle">잔다</span>
          </h1>
        </div>
      </div>
      {
        dataEntry.map((blockData) => {
          return <HomeBlock blockData={blockData} key={`${blockData.title} block`} />
        })
      }
    </div>
  );
};

export default HomeIndex;
