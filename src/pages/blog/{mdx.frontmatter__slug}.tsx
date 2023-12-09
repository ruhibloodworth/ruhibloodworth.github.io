import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { PageProps, graphql } from "gatsby";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

const BlogPost = ({ data, children }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataProps>) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
