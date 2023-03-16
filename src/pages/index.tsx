import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page" key={"home-page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Static Image Home Page"
        src="../images/king-bob2.webp"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default HomePage;
