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

const GuideList: React.FC<IProps> = ({ sort }) => {

    const [sideState, setSideState] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [heightFull, setHeightFull] = useState(false);

    const guideListDisplay = () => {

        console.log(`Sort : ${sort}`);

        let guideListData: TGuideList[] = [];

        if (sort == 'booking') {
            guideListData = dataBookingList;
            console.log(' why booking')
        }
        if (sort == 'template') {
            guideListData = dataTemplateList;
            console.log(' why template')
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

        if (dataBookingList.length > 2) {
            setScrollDown(true);
        } else {
            setHeightFull(true);
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
