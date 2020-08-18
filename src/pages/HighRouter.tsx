import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/guide/guideStyle.scss';
import Navigation, { TNaviData } from '../components/Nav';
import { guideData } from '../data/guideData';
import BookingSub from './GuidBody';
import { JDpreloader } from '@janda-com/front';
import { sharedEntryData } from '../type/const';
import { ICategory, IPost } from '../type/interface';
import { getUniqCats, getPostsByCatName } from '../utils/utils';


export const BookingEntry = React.lazy(() => import("../components/MainEntry"))

interface IProps {
    bookingData: IPost[]
}

const HighRouter: React.FC<IProps> = ({ bookingData }) => {

    const cateories = getUniqCats(bookingData);

    const naviData: TNaviData[] = cateories.map(ct => ({
        href: ct.name,
        name: ct.label
    }))

    return (
        <div className="bookingIndex">
            <Navigation
                naviData={naviData}
            />
            <Switch>
                <Route
                    exact
                    path={`/booking`}
                    component={() => <Suspense fallback={
                        <JDpreloader loading page />
                    }>
                        <BookingEntry
                            {...sharedEntryData}
                            text_menual="부킹시스템 메뉴얼"
                        />
                    </Suspense>
                    }
                />
                {cateories.map(ct =>
                    <Route
                        key={ct.name}
                        path={`/booking/${ct.name}`}
                        component={() => <BookingSub
                            category={ct}
                            datas={getPostsByCatName(bookingData, ct.name)}
                        />}
                    />
                )}
            </Switch>
        </div>
    )
}

export default HighRouter
