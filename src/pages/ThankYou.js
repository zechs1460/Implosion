import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        {/*}<Helmet title={`${pathname} | ${siteTitle}`} />*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{siteTitle}</title>
          <link href="./" />
        </Helmet>
        <Link to={`/`}>
          <h1 className="major">{this.props.data.site.siteMetadata.title}</h1>
        </Link>
        {/*<p>Something went wrong! Please try again.</p>*/}
        <p>
          <strong>Thank you for contacting us. </strong>
        </p>
        <p>We will soon reply to your message/comment.</p>
        <p>
          We can always be reached at 912-537-3434 if you need assistance
          immediatly.
        </p>
      </div>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query ThankYouQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
