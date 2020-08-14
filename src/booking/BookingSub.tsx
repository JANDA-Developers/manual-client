import React from 'react';
import '../scss/guide/guideStyle.scss';
import BookingSubEntry from '../components/SubEntry';
import BookingSubInfo from '../components/SubInfo';
import { guideData }  from '../data/guideData';

interface ISub {
    dataIndex : number
}

const BookingHome: React.FC<ISub> = ({
    dataIndex,
}) =>  {

    const data_InfoNew = guideData[dataIndex];
    const data_InfoTitle = guideData[dataIndex].title;

    const dataEntry = {
        title:"대한민국 1등 온,오프라인 숙소운영 및 통합예약 솔루션",
        logo:"JANDA",
        text_menual:data_InfoTitle
    }
    return (
        <div>
            <BookingSubEntry 
                title={dataEntry.title}
                logo={dataEntry.logo}
                text_menual={dataEntry.text_menual}
            />

            <BookingSubInfo
                dataHome={data_InfoNew} 
            />
        </div>
    )
}

export default BookingHome
