import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const portfolioSection = props => {
  const posts = props.content;
  let index = props.slide;

  const portfolio = posts.filter(
    post => post.frontmatter.category === "portfolio"
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
          <Img
            fluid={
              portfolio[index].frontmatter.featuredImage.childImageSharp.fluid
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
        <div className="column">
          <h1 className="my-3">{portfolio[index].frontmatter.title}</h1>
          <p className="">{portfolio[index].frontmatter.description}</p>
        </div>
      </div>
    </div>
  );
};

export default portfolioSection;
