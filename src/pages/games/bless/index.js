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
          <title>Bless | {siteTitle}</title>
          <link href="./" />
        </Helmet>
        <h2>Bless Online</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageBless.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query GamesBlessQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageBless: imageSharp(id: { regex: "/Bless.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
