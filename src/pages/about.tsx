import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage: React.FC<PageProps> = () => (
  <Layout pageTitle="About Me">
    <p>
      Hi there! I'm the proud creator of this site, which I built with Gatsby.
    </p>
  </Layout>
);

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About Me" />;
