import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" key={"about-me"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        incidunt nobis maiores eaque quasi mollitia dolorum, veniam rerum itaque
        vitae modi distinctio perferendis consequatur esse cumque quos, velit
        sint? Tempora.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <React.Fragment>
    <title>About Me</title>
    <meta name="description" content="My Description" />
  </React.Fragment>
);

export default AboutPage;
