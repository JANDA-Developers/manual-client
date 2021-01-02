import { QueryHookOptions, useQuery } from "@apollo/client";
import { FoffsetPagingInfo, Fpost, postList, postListVariables, _PostFilter, _PostSort } from "../apollo/api";
import { POST_LIST } from "../apollo/query";
import { useListHook, ListInitOptions, IListHook } from "./useListHook";


interface IuseItemListProp extends Partial<ListInitOptions<_PostFilter, _PostSort>> {
    options?: QueryHookOptions<postList, postListVariables>
}

export interface IusePostList extends IListHook<_PostFilter, _PostSort> {
    items: Fpost[];
    getLoading: boolean;
    pageInfo: FoffsetPagingInfo;
}

export const usePostList = ({
    initialPageIndex = 0,
    initialSort = [],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}: IuseItemListProp = {}): IusePostList => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, paginationHook, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListHook({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })

    const { data, loading: getLoading } = useQuery<postList, postListVariables>(POST_LIST, {
        fetchPolicy: "cache-and-network",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fpost[] = data?.PostList.items || [];
    const pageInfo: FoffsetPagingInfo = data?.PostList.pageInfo || {
        currentItemCount: 0,
        pageIndex: 0,
        pageItemCount: 0,
        totalPageCount: 0,
        __typename: "OffsetPagingInfo"
    }

    return { pageInfo, filter, paginationHook, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}