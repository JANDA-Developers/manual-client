import React, { useState, useEffect, useLayoutEffect } from 'react'

interface IEntry {
    title: string;
    logo: string;
    text_menual?: string;
}

const SubEntryView: React.FC<IEntry> = ({
    title,
    logo,
    text_menual
}) => {

    const [isLoad, setLoad] = useState(false);

    useLayoutEffect(() => {
        document.querySelector('.guideEntry__text_logo')?.classList.add('mounted');
        setLoad(true);
    }, [])

    return (
        <div className="guideEntry">
            <div className="guideEntry__outer">
                <div className="guideEntry__text">
                    <h1 className="guideEntry__text_title">{title}</h1>
                    <strong className="guideEntry__text_logo">{logo}</strong>
                    <h2 className="guideEntry__text_menual">{text_menual}</h2>
                </div>
                <div className="guideEntry__arrow">
                    <div className="guideEntry__arrow__inner">
                        <div className="guideEntry__arrow__inner_arrow"></div>
                    </div>
                </div>
                <div className={`guideEntry__deco1 ${!isLoad || "load"}`}></div>
                <div className={`guideEntry__deco2 ${!isLoad || "load"}`}></div>
                <div className={`guideEntry__deco3 ${!isLoad || "load"}`}></div>
            </div>
        </div>
    )
}

export default SubEntryView


