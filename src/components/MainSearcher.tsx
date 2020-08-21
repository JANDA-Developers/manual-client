import React, { useState, useContext, useMemo, Fragment } from "react";
import {
  JDsearchInput,
  ISearchViewData,
  parentScrollMoveToElement,
} from "@janda-com/front";
import { IPost } from "../type/interface";
import { useHistory, Redirect, useLocation, Link } from "react-router-dom";
import { getFullNameOfSuperClass } from "../utils/utils";
import { EntryContext } from "../context/entryContext";
import { updateURLParameter } from "@janda-com/front";
import { getFromUrl } from "@janda-com/front/build/utils/utils";
// import { getFromUrl } from "@janda-com/front/build/utils/utils";

interface IProps {
  posts: IPost[];
}

const MainSearcher: React.FC<IProps> = ({ posts }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { isLoad, loadChange } = useContext(EntryContext);

  const searchData: ISearchViewData[] = useMemo((): ISearchViewData[] => {
    return posts.map((d) => ({
      id: d.id,
      title: d.title,
      describe: d.body
        ?.slice(0, 50)
        .replace(/<[a-zA-Z\/][^>]*>/g, "")
        .replace(/&n?b?s?p?;?/gi, " "),
      tag: d.category.label,
    }));
  }, [posts]);

  return (
    <JDsearchInput
      onSelectData={(d) => {
        const targetPost = posts.find((data) => data.id === d.id);
        if (!targetPost) throw Error(`targetPost ${d.id} is not found`);
        const { superClassRoute } = getFullNameOfSuperClass(
          targetPost.category
        );
        const { name: categoryName } = targetPost.category;
        history.push(
          `/${superClassRoute}/${categoryName}?postId=${targetPost.id}`
        );
      }}
      dataList={searchData}
      searchValue={search}
      onSearchChange={(v) => {
        setSearch(v);
      }}
    />
  );
};

export default MainSearcher;
