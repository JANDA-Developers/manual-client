import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../scss/guide/guideStyle.scss";
import Navigation, { TNaviData } from "../components/Nav";
import GuidBody from "./GuidBody";
import { JDpreloader } from "@janda-com/front";
import { sharedEntryData } from "../type/const";
import { ICategory, IPost } from "../type/interface";
import { getPostsByCatId, getFullNameOfSuperClass } from "../utils/utils";
import { useCategoryList } from "../hook/useCatList";
import { SuperClass } from "../apollo/api";
import GuideList from "../components/GuideList";

export const GuideEntry = React.lazy(() => import("../components/MainEntry"));

// interface IProps {
//   bookingData: IPost[];
//   superClass: SuperClass;
// }

interface IProps {
  bookingData: IPost[];
  superClass: string;
}

const HighRouter: React.FC<IProps> = ({ bookingData, superClass }) => {

  const { items: categories } = useCategoryList({});
  let text_manual = "";

  switch (superClass) {
    case "부킹":
      text_manual = "부킹 시스템 가이드 ";
      break;
    case "템플릿A":
      text_manual = "템플릿 A 가이드";
      break;
    case "타임스페이스":
      text_manual = "타임스페이스 가이드";
      break;
    case "템플릿 호텔":
      text_manual = "호텔 템플릿 가이드";
      break;
  }

  console.log('categories : ');
  console.log(categories);

  const naviData: TNaviData[] = categories.filter(function (cat) {
    if (cat.hyperClass)
      return cat.hyperClass.label === superClass
  }).map((ct) => {
    const { superClassRoute } = getFullNameOfSuperClass(ct.hyperClass!.label);
    return {
      href: `/${superClass}/${ct._id}`,
      name: ct.label,
    };
  });

  // const naviData: TNaviData[] = categories.filter(cat => cat.superClass === superClass).map((ct) => {
  //   const { superClassRoute } = getFullNameOfSuperClass(ct.superClass);

  //   return {
  //     href: `/${superClassRoute}/${ct._id}`,
  //     name: ct.label,
  //   };
  // });

  return (
    <div className="bookingIndex">
      <Navigation naviData={naviData} />
      <Switch>
        <Route
          exact
          path={`/${superClass}`}
          component={() => (
            <Suspense fallback={<JDpreloader loading page />}>
              <GuideEntry {...sharedEntryData} text_menual={text_manual} />
            </Suspense>
          )}
        />

        {categories.map((ct) => (
          <Route
            key={ct._id}
            path={`/${superClass}/${ct._id}`}
            component={() => (
              <GuidBody category={ct} datas={getPostsByCatId(bookingData, ct._id)} />
            )}
          />
        ))}
      </Switch>
    </div>
  );
};

export default HighRouter;
