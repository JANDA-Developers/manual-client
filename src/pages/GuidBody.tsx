import React, { useLayoutEffect } from "react";
import "../scss/guide/guideStyle.scss";
import SubEntryView from "../components/SubEntryView";
import Guid from "../components/Guid";
import { ICategory, IPost } from "../type/interface";
import { sharedEntryData } from "../type/const";
import EntryContextProvider from "../context/entryContext";
import { s4 } from "@janda-com/front";
import { getFromUrl } from "@janda-com/front";
// @ts-ignore
import OnImagesLoaded from "react-on-images-loaded";

interface ISub {
  datas: IPost[];
  category: ICategory;
}

const GuidBody: React.FC<ISub> = ({ datas, category }) => {
  const dataEntry = {
    ...sharedEntryData,
    text_menual: category.label,
  };

  const postId = getFromUrl("postId");

  const infoNav = () => {
    const anchor = document.getElementById(`infonav${postId}`);
    if (anchor) {
      let anchortop = anchor.offsetTop;
      window.scrollTo(0, anchortop);
    }
  };

  return (
    <div>
      <EntryContextProvider onLoaded={() => {}}>
        <SubEntryView key={s4()} {...dataEntry} />
      </EntryContextProvider>
      <OnImagesLoaded onLoaded={() => infoNav()}>
        {datas.map((d) => (
          <Guid key={d.id} data={d} />
        ))}
      </OnImagesLoaded>
    </div>
  );
};

export default GuidBody;
