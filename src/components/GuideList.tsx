import { url } from 'inspector';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { dataBookingList, dataTemplateList } from '../data/dataCommon'
import '../scss/guide/guideList.scss'


type TGuideList = {
    link: string,
    bgImg: string,
    title: string,
    desc: string,
    icon: string
}

interface IProps {
    sort: string
}


const useScrollHook = () => {
    const [scroll, setScroll] = useState({
        winX: 0,
        winY: 0
    });
    const onScroll = (event: any) => {
        setScroll({
            ...scroll,
            winY: window.scrollY
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return scroll;
}

const GuideList: React.FC<IProps> = ({ sort }) => {

    const [sideState, setSideState] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [heightFull, setHeightFull] = useState(false);
    let guideListData: TGuideList[] = [];

    const arrowDisplay = () => {

        if (scrollDown) {
            return <div className="guideList__arrowWrap">
                <div className="guideEntry__arrow">
                    <div className="guideEntry__arrow__inner">
                        <div className="guideEntry__arrow__innerArrow"></div>
                    </div>
                </div>
            </div>
        }

    }

    const guideListDisplay = () => {

        if (sort == 'booking') {
            guideListData = dataBookingList;
        }
        if (sort == 'template') {
            guideListData = dataTemplateList;
        }

        return guideListData.map((guideList) => {
            return <div className={`guideList__block ${heightFull && 'full'}`}>
                <div className="guideList__blockImg" style={{ backgroundImage: `url(/img/booking/common/${guideList.bgImg})` }}></div>
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

    useEffect(() => {

        if (guideListData.length > 2) {
            setScrollDown(true);
        } else {
            setHeightFull(true);
        }
        setSideState(true);

    }, []);

    // const { winY } = useScrollHook();

    return (
        <div className="guideList">
            {/* {
                winY < 200 ? arrowDisplay() : null

            } */}

            <section className={`guideList__side ${sideState && 'on'}`}>
                <img src="/img/common/logo.png" alt="logo" className="guideList__sideLogo" />
                <div className="guideList__sideText">
                    <p className="guideList__sideIntro">
                        대한민국 1등 <br />클라우드·핀테크 기반 예약솔루션
                    </p>
                    <p className="guideList__sideIntro">
                        잔다
                    </p>
                    <a href="https://stayjanda.com/" className="guideList__sideLink" target="_blank">
                        사이트 바로가기
                    </a>
                </div>
            </section>
            <section className="guideBlockWrap">
                {
                    guideListDisplay()
                }
            </section>
        </div>
    )
}

export default GuideList
