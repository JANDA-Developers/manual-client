import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../scss/guide/guideHome.scss";
import { EntryContext } from "../context/entryContext";

const HomeIndex: React.FC = () => {
  const { pathChkUpdate } = useContext(EntryContext);

  useEffect(() => {
    // pathChkUpdate();
  }, []);

  return (
    <div className="guideHome">
      <div className="guideHome__bgtext">
        <h1>예약 솔루션의 모든 것</h1>
        <h2>Janda</h2>
      </div>
      <div className="guideHome__block">
        <Link to="/booking">
          <div className="guideHome__block__img"></div>
          <div className="guideHome__block__textWrap">
            <strong>Booking</strong>
            <p>가이드 바로가기</p>
          </div>
        </Link>
      </div>
      <div className="guideHome__block">
        <Link to="/template">
          <div className="guideHome__block__img"></div>
          <div className="guideHome__block__textWrap">
            <strong>Template</strong>
            <p>가이드 바로가기</p>
          </div>
        </Link>
      </div>
      <div className="guideHome__block">
        <Link to="/timespace">
          <div className="guideHome__block__img"></div>
          <div className="guideHome__block__textWrap">
            <strong>Timespace</strong>
            <p>가이드 바로가기</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeIndex;
