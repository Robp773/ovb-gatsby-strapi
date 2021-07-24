import React from "react";
import { graphql } from "gatsby";

import Layout from "~/components/layout";
import PageHeading from "~/components/styled/page-heading";
import SEO from "~/components/seo";

const NotesPage = ({ data }) => {
  //   const flatProducts = edges.map(({ node }) => node)
  console.log(data);
  const seo = { title: "Notes" };

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Notes</PageHeading>
      {data.allStrapiNote.edges.map((item, index) => {
        return <div>{item.node.id}</div>;
      })}
    </Layout>
  );
};

export const notePageQuery = graphql`
  query NotesQuery {
    allStrapiNote {
      edges {
        node {
          id
          title
          ropes_course_activities {
            id
          }
          content
          category
        }
      }
    }
  }
`;

export default NotesPage;
