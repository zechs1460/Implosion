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
          <title>Zedd | {siteTitle}</title>
          <link href="./" />
        </Helmet>

        <h2>Zedd</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageZedd.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query MusicZeddQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageZedd: imageSharp(id: { regex: "/Zedd.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
