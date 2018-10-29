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
          <title>Monty Oum | {siteTitle}</title>
          <link href="./" />
        </Helmet>

        <h2>Monty Oum</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageMonty.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query VideoMontyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageMonty: imageSharp(id: { regex: "/Monty.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
