import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import get from 'lodash/get'
//import styles from '../../../assets/scss/main.scss'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>World of Warcraft | {siteTitle}</title>
          <link href="./" />
        </Helmet>
        <h2>World of Warcraft</h2>
        <p>Friendship Birb</p>
        <p>Now go build something great.</p>
        <Img resolutions={this.props.data.imageWoW.resolutions} />
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query GamesWoWQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    imageWoW: imageSharp(id: { regex: "/WoW.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
