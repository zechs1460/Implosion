import PropTypes from 'prop-types'
import React from 'react'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      <span className="item">&copy;&nbsp;Copyright Claudio Dental Lab</span>
      &nbsp; &#11044; &nbsp;
      <a
        className="item"
        href="javascript:;"
        onClick={() => {
          props.onOpenArticle('Privacy')
        }}
      >
        &copy;&nbsp;Privacy&nbsp;Policy
      </a>
      &nbsp; &#11044; &nbsp;
      <a
        className="item"
        href="javascript:;"
        onClick={() => {
          props.onOpenArticle('Terms')
        }}
      >
        Terms&nbsp;of&nbsp;Use
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Footer
