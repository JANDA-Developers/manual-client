import { QueryHookOptions, useQuery } from "@apollo/client";
import { categoryList, categoryListVariables, Fcategory, FoffsetPagingInfo, _CategoryFilter, _CategorySort } from "../apollo/api";
import { useListHook, ListInitOptions, IListHook } from "./useListHook";
import { CATEGORY_LIST } from "../apollo/query";

interface IuseItemListProp extends Partial<ListInitOptions<_CategoryFilter, _CategorySort>> {
    options?: QueryHookOptions<categoryList, categoryListVariables>
}

export interface IuseCategoryList extends IListHook<_CategoryFilter, _CategorySort> {
    items: Fcategory[];
    getLoading: boolean;
    pageInfo: FoffsetPagingInfo;
}

export const useCategoryList = ({
    initialPageIndex = 0,
    initialSort = [],
    initialFilter = {},
    initialViewCount = 20,
    options = {}
}: IuseItemListProp = {}): IuseCategoryList => {
    const { variables: overrideVariables, ...ops } = options;
    const { filter, paginationHook, setFilter, setSort, setViewCount, sort, viewCount, integratedVariable } = useListHook({
        initialFilter,
        initialPageIndex,
        initialSort,
        initialViewCount
    })


    const { data, loading: getLoading } = useQuery<categoryList, categoryListVariables>(CATEGORY_LIST, {
        fetchPolicy: "cache-and-network",
        variables: {
            ...integratedVariable,
            ...overrideVariables
        },
        ...ops
    })

    const items: Fcategory[] = data?.CategoryList.items || [];
    const pageInfo: FoffsetPagingInfo = data?.CategoryList.pageInfo || {
        currentItemCount: 0,
        pageIndex: 0,
        pageItemCount: 0,
        totalPageCount: 0,
        __typename: "OffsetPagingInfo"
    }

    return { pageInfo, filter, paginationHook, getLoading, setFilter, setSort, setViewCount, sort, viewCount, items }
}