import React, { useState, useMemo } from "react";
import { JDsearchInput, ISearchViewData } from "@janda-com/front";
import { IPost } from "../type/interface";

interface IProps {
    data: IPost[];
}

const MainSearcher: React.FC<IProps> = ({ data }) => {

    const [search, setSearch] = useState("");

    const dataSet: ISearchViewData[] = useMemo((): ISearchViewData[] => {
        return data.map((d) => ({
            id: d.id,
            title: d.title,
            describe: d.body?.slice(0, 50),
            tag: d.category.label
        }))
    }, [data])

    return <JDsearchInput onSelectData={(d) => { }} dataList={dataSet} searchValue={search} onSearchChange={(v) => { setSearch(v) }} />

}

export default MainSearcher;