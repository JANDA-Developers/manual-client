import React from 'react'
import { IPost } from '../type/interface';
import { Sotrage } from '../type/const';

interface BookingHome {
    data: IPost;
}

const Guid: React.FC<BookingHome> = ({
    data
}) => {

    return (
        <div className="bookingHome guideInfo">
            <div className="bookingHome__outer guideInfo__outer">
                <h2 className="guideInfo__title">{data.title}</h2>
                {data.headerImage && <img src={Sotrage + data.headerImage} className="guideInfo__con__list__img" />}
                {data.body && <div
                    dangerouslySetInnerHTML={{
                        __html: data.body
                    }}></div>}
                {/* <ul className="guideInfo__con">
                    {
                        infoList.map((infoList: any, index: number) => {

                            return <li key={"bookingHomeLi" + index} className="guideInfo__con__list">
                                <h3 className="guideInfo__con__list__title">{infoList.title}</h3>
                                <p className="guideInfo__con__list__detail" dangerouslySetInnerHTML={{ __html: infoList.desc }}></p>
                                {
                                    infoList.img.map((infoImage: string, index: number) => {
                                    })
                                }
                            </li>
                        })
                    }
                </ul> */}
            </div>
        </div>
    )
}

export default Guid
