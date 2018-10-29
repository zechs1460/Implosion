import PropTypes from 'prop-types'
import React from 'react'
import Link from 'gatsby-link'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <div className="copyright">
      <p>
        <span className="item">
          &copy; Jojo's personal site, based on{' '}
          <a href={`https://github.com/ChangoMan/gatsby-starter-dimension`}>
            Gatsby Starter - Dimension.
          </a>
        </span>
      </p>
      <p>
        <span className="item">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Privacy')
            }}
          >
            &nbsp;Privacy&nbsp;Policy
          </a>
        </span>
        &nbsp; &#11044; &nbsp;
        <span className="item">
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Terms')
            }}
          >
            Terms&nbsp;of&nbsp;Use
          </a>
        </span>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
