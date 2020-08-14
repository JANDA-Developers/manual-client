import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

interface INavi {
    naviData:any[]
    setDataIndex:any
}

const Navigation:React.FC<INavi> = ({
    naviData,
    setDataIndex
}) => {

    const [isOpen,setOpen] = useState(false);

    function navClicked(index:any){
        setOpen(false);
        setDataIndex(index);
        window.scrollTo(0, 0);
    }

    return (
        <div className={`guideNavi ${isOpen || "off"}`}>
            <button onClick={()=>{setOpen(true)}} className="guideNavi__open">
                메뉴 보기
            </button>
            <div className="guideNavi__outer">
                <button onClick={()=>{setOpen(false)}} className="guideNavi__close">
                    닫기
                </button>
                <ul className="guideNavi__list">
                    {naviData.map((nav_list, index)=>{
                        return <li key={index} >
                            <Link to={nav_list.href} onClick={ () => {
                                navClicked(index);
                            }}>
                                <span className="guideNavi__list__item">{nav_list.name}</span>
                            </Link>
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navigation