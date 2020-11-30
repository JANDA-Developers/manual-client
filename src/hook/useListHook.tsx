import { IusePagination, usePagination } from "@janda-com/front";
import { ISet } from "@janda-com/front/build/types/interface";
import { useState } from "react";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
}

export interface IListHook<F, S> {
    setViewCount: ISet<number>;
    filter: F;
    sort: S[];
    setSort: ISet<S[]>;
    setFilter: ISet<F>;
    paginationHook: IusePagination;
    viewCount: number;
}

export function useListHook<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const [filter, setFilter] = useState<F>(initialFilter);
    const [sort, setSort] = useState<S[]>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const paginationHook = usePagination(initialPageIndex);

    const integratedVariable = {
        pagingInput: {
            pageIndex: paginationHook.page,
            pageItemCount: viewCount
        },
        filter,
        sort,
    }

    return { filter, setFilter, integratedVariable, sort, setSort, viewCount, setViewCount, paginationHook }
}