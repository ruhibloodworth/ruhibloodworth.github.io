import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, PageProps, graphql } from "gatsby";

type DataProps = {
  allMdx: {
    nodes: {
      id: string;
      excerpt: string;
      frontmatter: { title: string; date: string; slug: string };
    }[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>

          <time>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo />;

export default IndexPage;
