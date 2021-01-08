import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export type TNaviData = {
  href: string;
  name: string;
};
interface INavi {
  naviData: TNaviData[];
}

const Navigation: React.FC<INavi> = ({ naviData }) => {

  const [isOpen, setOpen] = useState(false);

  const handleNavbar = (navState: boolean) => {
    setOpen(navState);
  }

  const navClicked = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button onClick={() => { handleNavbar(true) }} className={`navOpen ${isOpen && "off"}`} >
        메뉴 보기
      </button>
      <div className={`guideNavi ${isOpen && "on"}`}>
        <div className="guideNavi__outer">
          <Link to="/">
            <button className="guideNavi__home">Home</button>
          </Link>
          <button onClick={() => { handleNavbar(false) }} className="guideNavi__close"> 닫기 </button>
          <ul className="guideNavi__list">
            {naviData.map((nav_list, index) => (
              <li key={index}>
                <Link to={nav_list.href} onClick={() => { navClicked() }}>
                  <span className="guideNavi__listItem">{nav_list.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
