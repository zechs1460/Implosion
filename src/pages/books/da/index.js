import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Demon Accords | {siteTitle}</title>
          <link href="./" />
        </Helmet>
        <h2>The Demon Accords</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageDA.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query BooksDAQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageDA: imageSharp(id: { regex: "/DA.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
