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
    <Layout>
      <article>
        <h2>{data.mdx.frontmatter.title}</h2>
        <time>{data.mdx.frontmatter.date}</time>
        {children}
      </article>
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
