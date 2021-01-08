/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryList
// ====================================================

export interface categoryList_CategoryList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface categoryList_CategoryList_items_hyperClass {
  __typename: "HyperClass";
  _id: any;
  createdAt: any;
  updatedAt: any;
  label: string;
  type: string;
}

export interface categoryList_CategoryList_items {
  __typename: "Category";
  _id: any;
  createdAt: any;
  updatedAt: any;
  label: string;
  /**
   * Deprecated 삭제 마이그레이션 필요함
   */
  superClass: SuperClass;
  /**
   * 마이그레이션 필요함 nullable 아님
   */
  hyperClass: categoryList_CategoryList_items_hyperClass | null;
}

export interface categoryList_CategoryList {
  __typename: "OffsetPagenatedCategoryData";
  pageInfo: categoryList_CategoryList_pageInfo;
  items: categoryList_CategoryList_items[];
}

export interface categoryList {
  CategoryList: categoryList_CategoryList;
}

export interface categoryListVariables {
  sort?: _CategorySort[] | null;
  filter?: _CategoryFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: postList
// ====================================================

export interface postList_PostList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface postList_PostList_items_author {
  __typename: "User";
  name: string | null;
}

export interface postList_PostList_items_hyperClass {
  __typename: "HyperClass";
  _id: any;
  type: string;
  label: string;
}

export interface postList_PostList_items_category {
  __typename: "Category";
  /**
   * Deprecated 삭제 마이그레이션 필요함
   */
  superClass: SuperClass;
  label: string;
  _id: any;
}

export interface postList_PostList_items {
  __typename: "Post";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  body: string;
  author: postList_PostList_items_author;
  hyperClass: postList_PostList_items_hyperClass | null;
  category: postList_PostList_items_category | null;
}

export interface postList_PostList {
  __typename: "OffsetPagenatedPostData";
  pageInfo: postList_PostList_pageInfo;
  items: postList_PostList_items[];
}

export interface postList {
  PostList: postList_PostList;
}

export interface postListVariables {
  sort?: _PostSort[] | null;
  filter?: _PostFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string | null;
  email: string;
  phoneNumber: string;
  role: UserRole;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpost
// ====================================================

export interface Fpost_author {
  __typename: "User";
  name: string | null;
}

export interface Fpost_hyperClass {
  __typename: "HyperClass";
  _id: any;
  type: string;
  label: string;
}

export interface Fpost_category {
  __typename: "Category";
  /**
   * Deprecated 삭제 마이그레이션 필요함
   */
  superClass: SuperClass;
  label: string;
  _id: any;
}

export interface Fpost {
  __typename: "Post";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  body: string;
  author: Fpost_author;
  hyperClass: Fpost_hyperClass | null;
  category: Fpost_category | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory_hyperClass {
  __typename: "HyperClass";
  _id: any;
  createdAt: any;
  updatedAt: any;
  label: string;
  type: string;
}

export interface Fcategory {
  __typename: "Category";
  _id: any;
  createdAt: any;
  updatedAt: any;
  label: string;
  /**
   * Deprecated 삭제 마이그레이션 필요함
   */
  superClass: SuperClass;
  /**
   * 마이그레이션 필요함 nullable 아님
   */
  hyperClass: Fcategory_hyperClass | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FoffsetPagingInfo
// ====================================================

export interface FoffsetPagingInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 슈퍼 분류!
 */
export enum SuperClass {
  BOOKING = "부킹",
  TEMPLATEA = "TEMPLATEA",
  TIMESPACE = "타임스페이스",
  HOTEL_HOTEL = "템플릿 호텔",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  UNCONFIRMED = "UNCONFIRMED",
}

/**
 * Auto generated sort type
 */
export enum _CategorySort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _PostSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

export interface OffsetPagingInput {
  pageIndex: number;
  pageItemCount: number;
}

export interface _CategoryFilter {
  AND?: _CategoryFilter[] | null;
  OR?: _CategoryFilter[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
}

export interface _PostFilter {
  AND?: _PostFilter[] | null;
  OR?: _PostFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_contains?: string | null;
  category_eq?: any | null;
  category_not_eq?: any | null;
  category_in?: any[] | null;
  category_not_in?: any[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
