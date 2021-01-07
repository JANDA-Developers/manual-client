import React from 'react'
import { Link } from "react-router-dom";
import "../scss/guide/guideHome.scss";

type TblockData = {
    link: string,
    title: string,
    desc: string,
    icon: string,
}

interface IblockData {
    blockData: TblockData
}

const HomeBlock: React.FC<IblockData> = ({ blockData }) => {

    return (
        <div className="homeBlock">
            <Link to={blockData.link} className="homeBlock__link">
                <h2 className="homeBlock__title">
                    {blockData.title}
                </h2>
                <p className="homeBlock__desc"
                    dangerouslySetInnerHTML={{ __html: blockData.desc }}></p>
                <div className="homeBlock__icon"
                    dangerouslySetInnerHTML={{
                        __html: blockData.icon,
                    }}></div>

            </Link>
        </div>
    )
}

export default HomeBlock
