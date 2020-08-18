import { IPost, ICategory } from "../type/interface";
import { CategorySuperClass } from "../apollo/api";

export const getPostsByCatName = (datas: IPost[], name: string): IPost[] => datas.filter(d => d.category.name === name)


export const getUniqCats = (data: IPost[]) => {
    const uniqCats: ICategory[] = [];
    data.forEach(d => {
        if (!uniqCats.find(c => c.name === d.category.name))
            uniqCats.push(d.category);
    })
    return uniqCats;
}

export const filterDataBySuperClass = (datas:IPost[],superClass:CategorySuperClass) => datas.filter(d => d.category.superClass === superClass);