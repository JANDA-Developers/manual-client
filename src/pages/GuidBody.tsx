import React from 'react';
import '../scss/guide/guideStyle.scss';
import SubEntryView from '../components/SubEntryView';
import Guid from '../components/Guid';
import { ICategory, IPost } from '../type/interface';
import { sharedEntryData } from '../type/const';

interface ISub {
    datas: IPost[]
    category: ICategory
}

const GuidBody: React.FC<ISub> = ({
    datas,
    category,
}) => {
    const dataEntry = {
        ...sharedEntryData,
        text_menual: category.label
    }
    return (
        <div>
            <SubEntryView {...dataEntry} />
            {datas.map(d =>
                <Guid
                    key={d.id}
                    data={d}
                />
            )}
        </div>
    )
}

export default GuidBody
