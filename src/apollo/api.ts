/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPosts
// ====================================================

export interface AllPosts_allPosts_category {
  __typename: "CategoryType";
  id: string;
  label: string;
  name: string;
  superClass: CategorySuperClass;
}

export interface AllPosts_allPosts {
  __typename: "PostType";
  id: string;
  title: string;
  headerImage: string | null;
  body: string | null;
  video: string;
  category: AllPosts_allPosts_category;
}

export interface AllPosts {
  allPosts: (AllPosts_allPosts | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum CategorySuperClass {
  BK = "BK",
  TA = "TA",
  TS = "TS",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
