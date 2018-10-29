import React, { createContext } from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27 && this.state.isArticleVisible === true) {
        this.handleCloseArticle()
      }
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { location, children } = this.props

    let rootPath = `/`

    let content

    if (location.pathname === rootPath) {
      content = (
        <div id="wrapper">
          <Header
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
            onOpenArticle={this.handleOpenArticle}
            /*background*/
            //background={this.props.data.background}
            /*Dentures*/
            imagedenture1={this.props.data.imagedenture1}
            imagedenture2={this.props.data.imagedenture2}
            imagedenture3={this.props.data.imagedenture3}
            imagedenture4={this.props.data.imagedenture4}
            /*Partials*/
            imagePartial1={this.props.data.imagePartial1}
            imagePartial2={this.props.data.imagePartial2}
            imagePartial3={this.props.data.imagePartial3}
            imagePartial4={this.props.data.imagePartial4}
            imagePartial5={this.props.data.imagePartial5}
            imagePartial6={this.props.data.imagePartial6}
            /*CrownAndBridge*/
            imageCrownAndBridge1={this.props.data.imageCrownAndBridge1}
            imageCrownAndBridge2={this.props.data.imageCrownAndBridge2}
            imageCrownAndBridge3={this.props.data.imageCrownAndBridge3}
            imageCrownAndBridge4={this.props.data.imageCrownAndBridge4}
            imageCrownAndBridge5={this.props.data.imageCrownAndBridge5}
            /*Cast Metal Frames*/
            imageCast1={this.props.data.imageCast1}
            imageCast2={this.props.data.imageCast2}
            imageCast3={this.props.data.imageCast3}
            imageCast4={this.props.data.imageCast4}
            /*Others*/
            imageOther1={this.props.data.imageOther1}
            imageOther2={this.props.data.imageOther2}
            imageOther3={this.props.data.imageOther3}
            imageOther4={this.props.data.imageOther4}
            imageOther5={this.props.data.imageOther5}
            imageOther6={this.props.data.imageOther6}
            /*Digital*/
            imageDigital1={this.props.data.imageDigital1}
            imageDigital2={this.props.data.imageDigital2}
            imageDigital3={this.props.data.imageDigital3}
            imageDigital4={this.props.data.imageDigital4}
            imageDigital5={this.props.data.imageDigital5}
            imageDigital6={this.props.data.imageDigital6}
            imageDigital7={this.props.data.imageDigital7}
            imageDigital8={this.props.data.imageDigital8}
            /*About*/
            imageAbout1={this.props.data.imageAbout1}
            imageAbout2={this.props.data.imageAbout2}
            imageAbout3={this.props.data.imageAbout3}
            imageAbout4={this.props.data.imageAbout4}
            /*ML*/
            imageML={this.props.data.imageML}
            /*RX*/
            imageRX={this.props.data.imageRX}
            /*Fixed*/
            imageFixed={this.props.data.imageFixed}
          />
          <Footer
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />

          {/*<Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
            sizes={this.props.data.background.sizes}
          />*/}
        </div>
      )
    } else {
      content = (
        <div id="wrapper" className="page">
          <div
            style={{
              maxWidth: '1140px',
            }}
          >
            {children()}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        {content}
        <div id="bg" />
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    #background: imageSharp(id: { regex: "/bg.jpg/" }) {
    #  sizes(maxWidth: 1920) {
    #    ...GatsbyImageSharpSizes
    #  }
    #}
    # Dentures
    imagedenture1: imageSharp(id: { regex: "/denture1.png/" }) {
      resolutions(width: 223, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagedenture2: imageSharp(id: { regex: "/denture2.png/" }) {
      resolutions(width: 228, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagedenture3: imageSharp(id: { regex: "/denture3.png/" }) {
      resolutions(width: 223, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagedenture4: imageSharp(id: { regex: "/denture4.png/" }) {
      resolutions(width: 270, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Partials
    imagePartial1: imageSharp(id: { regex: "/Partial1.png/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePartial2: imageSharp(id: { regex: "/Partial2.png/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePartial3: imageSharp(id: { regex: "/Partial3.png/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePartial4: imageSharp(id: { regex: "/Partial4.png/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePartial5: imageSharp(id: { regex: "/Partial5.png/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePartial6: imageSharp(id: { regex: "/Partial6.png/" }) {
      resolutions(width: 199, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Crown and Bridge
    imageCrownAndBridge1: imageSharp(id: { regex: "/CrownAndBridge1.png/" }) {
      resolutions(width: 115, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCrownAndBridge2: imageSharp(id: { regex: "/CrownAndBridge2.png/" }) {
      resolutions(width: 191, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCrownAndBridge3: imageSharp(id: { regex: "/CrownAndBridge3.png/" }) {
      resolutions(width: 150, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCrownAndBridge4: imageSharp(id: { regex: "/CrownAndBridge4.png/" }) {
      resolutions(width: 167, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCrownAndBridge5: imageSharp(id: { regex: "/CrownAndBridge5.jpg/" }) {
      resolutions(width: 164, height: 120) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Cast
    imageCast1: imageSharp(id: { regex: "/Cast1.png/" }) {
      resolutions(width: 186, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCast2: imageSharp(id: { regex: "/Cast2.png/" }) {
      resolutions(width: 225, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCast3: imageSharp(id: { regex: "/Cast3.png/" }) {
      resolutions(width: 222, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCast4: imageSharp(id: { regex: "/Cast4.png/" }) {
      resolutions(width: 216, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Digital
    imageDigital1: imageSharp(id: { regex: "/Digital1.png/" }) {
      resolutions(width: 180, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital2: imageSharp(id: { regex: "/Digital2.png/" }) {
      resolutions(width: 180, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital3: imageSharp(id: { regex: "/Digital3.png/" }) {
      resolutions(width: 180, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital4: imageSharp(id: { regex: "/Digital4.png/" }) {
      resolutions(width: 180, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital5: imageSharp(id: { regex: "/Digital5.png/" }) {
      resolutions(width: 180, height: 101) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital6: imageSharp(id: { regex: "/Digital6.png/" }) {
      resolutions(width: 180, height: 115) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital7: imageSharp(id: { regex: "/Digital7.png/" }) {
      resolutions(width: 180, height: 106) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDigital8: imageSharp(id: { regex: "/Digital8.png/" }) {
      resolutions(width: 180, height: 127) {
        ...GatsbyImageSharpResolutions
      }
    }
    # About
    imageAbout1: imageSharp(id: { regex: "/About1.jpg/" }) {
      resolutions(width: 152, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAbout2: imageSharp(id: { regex: "/About2.jpg/" }) {
      resolutions(width: 199, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAbout3: imageSharp(id: { regex: "/About3.png/" }) {
      resolutions(width: 183, height: 141) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAbout4: imageSharp(id: { regex: "/About4.png/" }) {
      resolutions(width: 178, height: 141) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Other
    imageOther1: imageSharp(id: { regex: "/Other1.png/" }) {
      resolutions(width: 180, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOther2: imageSharp(id: { regex: "/Other2.png/" }) {
      resolutions(width: 187, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOther3: imageSharp(id: { regex: "/Other3.png/" }) {
      resolutions(width: 179, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOther4: imageSharp(id: { regex: "/Other4.png/" }) {
      resolutions(width: 155, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOther5: imageSharp(id: { regex: "/Other5.png/" }) {
      resolutions(width: 199, height: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    # ML
    imageML: imageSharp(id: { regex: "/ML.jpg/" }) {
      resolutions(width: 550, height: 336) {
        ...GatsbyImageSharpResolutions
      }
    }
    # RX
    imageRX: imageSharp(id: { regex: "/RX.jpg/" }) {
      resolutions(width: 415, height: 650) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Fixed
    imageFixed: imageSharp(id: { regex: "/Fixed.jpg/" }) {
      resolutions(width: 985, height: 746) {
        ...GatsbyImageSharpResolutions
      }
    }
    # End
  }
`
