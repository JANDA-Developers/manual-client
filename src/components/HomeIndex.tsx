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
          <div className="guideHome__blockImg"></div>
          <div className="guideHome__blockText">
            <img className="blockLogo" src="/img/index/logo1.png"></img>
            <h3>Booking Solution</h3>
            <p>
              잔다에서 제공하는 <br />
              통합 예약 시스템 <br />
              '잔다 부킹 솔루션'
            </p>
            <img src="/img/index/arrow.png"></img>
          </div>
        </Link>
      </div>
      <div className="guideHome__block">
        <Link to="/template">
          <div className="guideHome__blockImg"></div>
          <div className="guideHome__blockText">
            <img className="blockLogo" src="/img/index/logo2.png"></img>
            <h3>Booking Light</h3>
            <p>
              잔다에서 제공하는 <br />
              통합예약관리의 필수 기능만 모은
              <br />
              '잔다 부킹 솔루션 라이트'
            </p>
            <img src="/img/index/arrow.png"></img>
          </div>
        </Link>
      </div>
      <div className="guideHome__block">
        <Link to="/timespace">
          <div className="guideHome__blockImg"></div>
          <div className="guideHome__blockText">
            <img className="blockLogo" src="/img/index/logo3.png"></img>
            <h3>Timespace</h3>
            <p>
              잔다에서 제공하는 <br />
              공간예약을 시간으로 관리하는 솔루션
              <br />
              '타임스페이스'
            </p>
            <img src="/img/index/arrow.png"></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeIndex;
