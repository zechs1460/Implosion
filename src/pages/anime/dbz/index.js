import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    return (
      <div>
        <Helmet>
          <title>DBZ | {siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <h2>Dragonball Z</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageDBZ.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query AnimeDBZQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageDBZ: imageSharp(id: { regex: "/DBZ.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
