import React from 'react'

interface BookingHome {
    dataHome:any
}

const BookingHome:React.FC<BookingHome> = ({
    dataHome
}) => {
    const infoTitle = dataHome.title;
    const infoList = dataHome.body;
    return (
        <div className="bookingHome guideInfo">
            <div className="bookingHome__outer guideInfo__outer">
                <h2 className="guideInfo__title">{infoTitle}</h2>
                <ul className="guideInfo__con">
                    {
                        infoList.map((infoList:any, index:number)=>{
                            
                            return <li key={"bookingHomeLi" + index} className="guideInfo__con__list">
                                        <h3 className="guideInfo__con__list__title">{infoList.title}</h3>
                                        <p className="guideInfo__con__list__detail" dangerouslySetInnerHTML={ {__html: infoList.desc} }></p>
                                        {
                                            infoList.img.map((infoImage:string, index:number)=>{
                                                return <img key={"guide_image" + index} src={infoImage} alt={"guide_img" + index} className="guideInfo__con__list__img"></img>
                                            })
                                        }
                                   </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BookingHome
