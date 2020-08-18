import { gql } from "@apollo/client";

export const GET_ALL_POST = gql`
  query AllPosts {
    allPosts{
        id
        title
        headerImage
        body
        category {
          id
          label
          name
          superClass
        }
    }
  }
`;