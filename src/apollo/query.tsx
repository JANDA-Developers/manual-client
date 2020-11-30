import { gql } from "@apollo/client";

const F_USER = gql`
fragment Fuser on User {
  _id
  createdAt
  updatedAt
  name
  email
  phoneNumber
  role
}
`;

const F_POST = gql`
  fragment Fpost on Post {
    _id
    createdAt
    updatedAt
    title
    body
    author {
      name
    }
    category {
      superClass
      label
      _id
    }
  }
`;

const F_CATEOGRY = gql`
fragment Fcategory on Category {
_id
createdAt
updatedAt
label
superClass
}`;


const F_OFFSET_PAGEING_INFO = gql`
fragment FoffsetPagingInfo on OffsetPagingInfo {
  pageIndex
  pageItemCount
  currentItemCount
  totalPageCount
}`

export const CATEGORY_LIST = gql`
  query categoryList(
    $sort: [_CategorySort!],
    $filter: _CategoryFilter,
    $pagingInput: OffsetPagingInput!
  ){
  CategoryList(sort:$sort, filter:$filter, pagingInput:$pagingInput){
    pageInfo {
      ...FoffsetPagingInfo
    }
    items {
      ...Fcategory
    }
  }
}
${F_OFFSET_PAGEING_INFO}
${F_CATEOGRY}
`;

export const POST_LIST = gql`
query postList(
  $sort: [_PostSort!],
	$filter: _PostFilter,
	$pagingInput: OffsetPagingInput!
){
  PostList(sort:$sort, filter:$filter, pagingInput:$pagingInput){
    pageInfo {
      ...FoffsetPagingInfo
    }
    items {
      ...Fpost
    }
  }
}
${F_OFFSET_PAGEING_INFO}
${F_POST}
`
