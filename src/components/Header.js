import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Dentures')
            }}
          >
            Dentures
          </a>
        </li>
        <div className="divide1" />
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Partials')
            }}
          >
            FRS&nbsp;Partials
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('CrownAndBridge')
            }}
          >
            Crown
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('CrownAndBridge')
            }}
          >
            Bridge
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Cast')
            }}
          >
            Cast&nbsp;Metal
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Other')
            }}
          >
            Other&nbsp;Products
          </a>
        </li>
      </ul>
    </nav>
    <div className="content">
      <div className="inner">
        <h6>Claudio Dental Lab</h6>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Digital')
            }}
          >
            Digital
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('About')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Contact')
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('ML')
            }}
          >
            Mailing&nbsp;Label
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('RX')
            }}
          >
            RX&nbsp;Form
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Fixed')
            }}
          >
            Fixed&nbsp;Form
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
