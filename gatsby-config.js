module.exports = {
  siteMetadata: {
    title: `Marxos Portfolio`,
    author: {
      name: `Marcus Whitehead`,
      summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tempus orci. Praesent urna odio, egestas vitae luctus sed, tincidunt nec diam. Fusce vestibulum, nisi vel pulvinar semper, risus massa ultricies orci, porttitor accumsan ante elit tempus neque. Maecenas laoreet elit purus, et varius ligula egestas sed. Donec luctus lectus in massa accumsan, at tristique eros condimentum. Fusce id ipsum auctor, faucibus ex id, luctus nunc. Aliquam molestie odio non nisi tempus pharetra. Aliquam felis arcu, iaculis a ornare id, luctus vitae nisl. Vestibulum interdum quam at mauris imperdiet dapibus a nec urna. Proin mollis dui vitae posuere sollicitudin. Pellentesque sit amet sem semper, imperdiet nunc id, placerat erat. Aliquam pharetra, nisi sed pellentesque condimentum, turpis lectus dapibus nibh, et egestas enim neque ac lacus. Aenean dictum volutpat sapien, ut sollicitudin enim imperdiet ornare. Nulla interdum ut odio quis scelerisque. Morbi faucibus, metus sit amet faucibus molestie, nunc magna eleifend magna, a pharetra est tellus vitae ipsum.`,
    },
    description: `A beautiful portfolio website to show off my design skills throughout the years of college education.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `marxos`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/products`,
        name: `products`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
