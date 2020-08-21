import { IPost, ICategory } from "../type/interface";
import { CategorySuperClass } from "../apollo/api";

export const getPostsByCatName = (datas: IPost[], name: string): IPost[] =>
  datas.filter((d) => d.category.name === name);

export const getUniqCats = (data: IPost[]) => {
  const uniqCats: ICategory[] = [];
  data.forEach((d) => {
    if (!uniqCats.find((c) => c.name === d.category.name))
      uniqCats.push(d.category);
  });
  return uniqCats;
};

export const filterDataBySuperClass = (
  datas: IPost[],
  superClass: CategorySuperClass
) => datas.filter((d) => d.category.superClass === superClass);

export const getFullNameOfSuperClass = (ct: ICategory) => {
  let superClassRoute = "";
  let text_manual = "";
  if (ct.superClass === CategorySuperClass.BK) {
    superClassRoute = "booking";
    text_manual = "부킹시스템 메뉴얼";
  }
  if (ct.superClass === CategorySuperClass.TA) {
    superClassRoute = "template";
    text_manual = "템플릿 메뉴얼";
  }
  if (ct.superClass === CategorySuperClass.TS) {
    superClassRoute = "timespace";
    text_manual = "타임스페이스 메뉴얼";
  }

  return { superClassRoute, text_manual };
};
