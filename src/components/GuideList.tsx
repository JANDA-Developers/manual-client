import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { dataBookingList } from '../data/dataCommon'
import '../scss/guide/guideList.scss'

const GuideList: React.FC = () => {
    const [sideState, setSideState] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        if (dataBookingList.length > 2) {
            setScrollDown(true);
        }
        setSideState(true);
    }, []);

    return (
        <div className="guideList">
            <section className={`guideList__side ${sideState && 'on'}`}>
                <img src="/img/common/logo.png" alt="logo" className="guideList__sideLogo" />
                <div className="guideList__sideText">
                    <p className="guideList__sideIntro">
                        대한민국 1등 <br />클라우드·핀테크 기반 예약솔루션
                    </p>
                    <p className="guideList__sideIntro">
                        잔다
                    </p>
                    <a href="" className="guideList__sideLink" target="_blank">
                        사이트 바로가기
                    </a>
                    {
                        scrollDown &&
                        <div>scrollDown
                            </div>
                    }
                </div>
            </section>
            <section className="guideListWrap">
                {
                    dataBookingList.map((guideList) => {
                        return <div className="guideList__block">
                            <Link to={guideList.link} className="guideList__blockLink">
                                <div className="guideList__blockIconWrap"
                                    dangerouslySetInnerHTML={{ __html: guideList.icon }}></div>
                                <h2 className="guideList__blockTitle">
                                    {guideList.title}
                                </h2>
                                <p className="guideList__blockDesc"
                                    dangerouslySetInnerHTML={{ __html: guideList.desc }}></p>
                            </Link>
                        </div>
                    })
                }
            </section>
        </div>
    )
}

export default GuideList
