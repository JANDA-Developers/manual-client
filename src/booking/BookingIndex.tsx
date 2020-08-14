import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/guide/guideStyle.scss';
import Navitation from '../components/Nav';
import { guideData }  from '../data/guideData';
import BookingSub from './BookingSub';


const BookingEntry = React.lazy(()=> import("../components/MainEntry"))


function BookingIndex( routeDate?:any ) {

    const routePath = routeDate.match.path;
    const [dataIndex, setDataIndex] = useState(0);

    console.log("Data index Updated to " + dataIndex);
    const route_new:any = [];

    guideData.map((list, index)=>{
        route_new.push(
            {href:`${routePath}/${list.path}`, name:`${list.title}`}
        )
    })

    return (
        <div className="bookingIndex">
           <Navitation 
                naviData={route_new}
                setDataIndex={setDataIndex}
            />
           <Switch>
                <Route 
                    exact
                    path={`${routePath}`}
                    component={()=> <Suspense fallback={
                                <span>page loading</span>
                              }>
                                <BookingEntry 
                                        title="대한민국 1등 온,오프라인 숙소운영 및 통합예약 솔루션"
                                        logo="JANDA"
                                        text_menual="부킹시스템 메뉴얼"
                               />
                               </Suspense>
                               } 
                />
                <Route 
                    path={`${routePath}/home`}
                    component={()=> <BookingSub
                                        dataIndex={dataIndex}
                                    />} 
                />
                <Route 
                    exact
                    path={`${routePath}/calander`}
                    component={()=> <BookingSub
                                        dataIndex={dataIndex}
                                    />} 
                />
                <Route 
                    exact
                    path={`${routePath}/statistics`}
                    component={()=> <BookingSub
                                        dataIndex={dataIndex}
                                    />} 
                />
               
            </Switch>
        </div>
    )
}

export default BookingIndex
