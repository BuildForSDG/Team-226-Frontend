import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import Layout from '../components/home-layout';
import SEO from '../components/seo';

import '../styles/home.css';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "apple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <Image/>
      <p>work hard</p>
    </div>
  </Layout>
);

export default IndexPage;
