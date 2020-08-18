import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export type TNaviData = {
    href: string;
    name: string;
}

interface INavi {
    naviData: TNaviData[]
}

const Navigation: React.FC<INavi> = ({
    naviData,
}) => {

    const [isOpen, setOpen] = useState(false);

    function navClicked() {
        setOpen(false);
        window.scrollTo(0, 0);
    }

    return (
        <div className={`guideNavi ${isOpen || "off"}`}>
            <button onClick={() => { setOpen(true) }} className="guideNavi__open">
                메뉴 보기
            </button>
            <div className="guideNavi__outer">
                <button onClick={() => { setOpen(false) }} className="guideNavi__close">
                    닫기
                </button>
                <ul className="guideNavi__list">
                    {naviData.map((nav_list, index) => <li key={index} >
                        <Link to={nav_list.href} onClick={() => {
                            navClicked();
                        }}>
                            <span className="guideNavi__list__item">{nav_list.name}</span>
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navigation