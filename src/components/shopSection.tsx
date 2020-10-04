import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const shopSection = props => {
  const posts = props.content;
  let index = props.slide;

  const products = posts.filter(
    product => product.frontmatter.category === "product"
  );

  const handleSlide = (e: object, index: number) => {
    console.log(e.target.value);
    console.log(index);

    if (e.target.value === "next") {
      return index++;
    } else if (e.target.value === "prev") {
      return index--;
    } else {
      return index;
    }
  };

  return (
    <div className="my-5">
      <div className="columns is-vcentered">
        <div className="column">
          <h1 className="my-3">{products[index].frontmatter.title}</h1>
          <p className="">{products[index].frontmatter.description}</p>
        </div>
        <div className="column">
          <Img
            fluid={
              products[index].frontmatter.featuredImage.childImageSharp.fluid
            }
          />
          <div className="columns controls my-3">
            <div className="column">
              <button
                className="is-pulled-left"
                onClick={e => handleSlide(e, index)}
                value="prev"
              >
                Previous
              </button>
            </div>
            <div className="column">
              <button
                className="is-pulled-right"
                onClick={e => handleSlide(e, index)}
                value="next"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopSection;

export const slideQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
