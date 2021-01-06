import { SuperClass } from "../apollo/api";
import { IPost, ICategory } from "../type/interface";

export const getPostsByCatId = (datas: IPost[], id: string): IPost[] =>
  datas.filter((d) => d.category?._id === id);

export const filterDataBySuperClass = (
  datas: IPost[],
  superClass: SuperClass
) => datas.filter((d) => d.hyperClass?.label === superClass);

export const getFullNameOfSuperClass = (ct: string) => {
  let superClassRoute = "";
  let text_manual = "";
  // if (ct === SuperClass.BOOKING) {
  //   superClassRoute = "booking";
  //   text_manual = "부킹시스템 메뉴얼";
  // }
  // if (ct === SuperClass.TEMPLATEA) {
  //   superClassRoute = "template";
  //   text_manual = "템플릿 메뉴얼";
  // }
  // if (ct === SuperClass.TIMESPACE) {
  //   superClassRoute = "timespace";
  //   text_manual = "타임스페이스 메뉴얼";
  // }

  if (ct === "부킹") {
    superClassRoute = "부킹";
    text_manual = "부킹시스템 메뉴얼";
  }
  if (ct === "템플릿A") {
    superClassRoute = "템플릿A";
    text_manual = "템플릿 메뉴얼";
  }
  if (ct === "타임스페이스") {
    superClassRoute = "타임스페이스";
    text_manual = "타임스페이스 메뉴얼";
  }

  return { superClassRoute, text_manual };
};







