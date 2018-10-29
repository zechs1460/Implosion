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
          <title>Me | {siteTitle}</title>
          <link href="./" />
        </Helmet>

        <h2>About Me</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageAbout.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query MiscAboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageAbout: imageSharp(id: { regex: "/About.jpg/" }) {
      resolutions(width: 180, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
