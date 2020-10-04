import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

const Shop = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  console.log(posts);

  const products = posts.filter(
    product => product.frontmatter.category === "product"
  );

  console.log(products);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Shop" />
      <div className="columns">
        <aside className="column is-one-fifth">
          <div className="panel">
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              All categories
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              Price range
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              Apparel type
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              Rating
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              Shipping
            </a>
            <a className="panel-block is-active">
              <span className="panel-icon"></span>
              Saves
            </a>
          </div>
        </aside>
        <ol
          style={{ listStyle: `none` }}
          className="is-four-fifth columns is-multiline is-3"
        >
          {products.map(post => {
            const title = post.frontmatter.title || post.fields.slug;
            let featuredImg =
              post.frontmatter.featuredImage.childImageSharp.fluid;

            return (
              <>
                <div
                  className="column is-one-third-tablet is-one-quarter-desktop is-full-mobile"
                  key={post.fields.slug}
                >
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <Img fluid={featuredImg} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <Link to={post.fields.slug}>
                        <h1 className="title">{title}</h1>
                      </Link>
                      <div className="content">
                        <small className="subtitle">
                          {post.frontmatter.date}
                        </small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </div>
                    </div>
                    <footer className="card-footer">
                      <Link to={post.fields.slug} className="card-footer-item">
                        Buy
                      </Link>
                    </footer>
                  </div>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default Shop;

export const shopQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
          category
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
