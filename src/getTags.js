import gql from "graphql-tag";

export const GetTags = gql`
  query MyQuery {
    category_tags {
      cost
      created_at
      creator_id
      id
      tag
      category
    }
  }
`;
