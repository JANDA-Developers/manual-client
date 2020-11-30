import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../scss/guide/guideStyle.scss";
import Navigation, { TNaviData } from "../components/Nav";
import GuidBody from "./GuidBody";
import { JDpreloader } from "@janda-com/front";
import { sharedEntryData } from "../type/const";
import { ICategory, IPost } from "../type/interface";
import {
  getPostsByCatId,
  getFullNameOfSuperClass,
} from "../utils/utils";
import { useCategoryList } from "../hook/useCatList";

export const GuideEntry = React.lazy(() => import("../components/MainEntry"));

interface IProps {
  bookingData: IPost[];
  superClass: string;
}

const HighRouter: React.FC<IProps> = ({ bookingData, superClass }) => {
  const { items: cateories } = useCategoryList();
  let text_manual = "";
  switch (superClass) {
    case "booking":
      text_manual = "부킹 시스템 가이드 2";
      break;
    case "template":
      text_manual = "템플릿 가이드";
      break;
    case "timespace":
      text_manual = "타임스페이스 가이드";
      break;
  }
  const naviData: TNaviData[] = cateories.map((ct) => {
    const { superClassRoute, text_manual } = getFullNameOfSuperClass(ct.superClass);

    return {
      href: `/${superClassRoute}/${ct.label}`,
      name: ct.label,
    };
  });

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
        {cateories.map((ct) => (
          <Route
            key={ct._id}
            path={`/${superClass}/${ct._id}`}
            component={() => (
              <GuidBody
                category={ct}
                datas={getPostsByCatId(bookingData, ct._id)}
              />
            )}
          />
        ))}
      </Switch>
    </div>
  );
};

export default HighRouter;
