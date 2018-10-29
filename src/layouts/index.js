import React, { createContext } from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Link from 'gatsby-link'

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
      if (
        e.keyCode === 27 &&
        this.state.isArticleVisible === true &&
        location.pathname === `/`
      ) {
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
            /* IF USING BACKGROUND IMAGE WITH GATSBY-IMAGE */
            /*background*/
            //background={this.props.data.background}
            /*Games*/
            imageWoW={this.props.data.imageWoW}
            imageBDO={this.props.data.imageBDO}
            imagePoE={this.props.data.imagePoE}
            imageBless={this.props.data.imageBless}
            /*Anime*/
            imageDBZ={this.props.data.imageDBZ}
            imageBleach={this.props.data.imageBleach}
            imageGundamWing={this.props.data.imageGundamWing}
            imageBNHA={this.props.data.imageBNHA}
            /*Music*/
            imageGackt={this.props.data.imageGackt}
            imageZedd={this.props.data.imageZedd}
            imagePerfectCircle={this.props.data.imagePerfectCircle}
            imageMetallica={this.props.data.imageMetallica}
            /*Video*/
            imageMovies={this.props.data.imageMovies}
            imageSeries={this.props.data.imageSeries}
            imageFanMade={this.props.data.imageFanMade}
            imageMonty={this.props.data.imageMonty}
            /*Books*/
            imageRPO={this.props.data.imageRPO}
            imageWoWBooks={this.props.data.imageWoWBooks}
            imageDA={this.props.data.imageDA}
            imageLRPG={this.props.data.imageLRPG}
            imageKKC={this.props.data.imageKKC}
            imageGoT={this.props.data.imageGoT}
            imageCS={this.props.data.imageCS}
            /*Misc*/
            imageMemes={this.props.data.imageMemes}
            imageHawt={this.props.data.imageHawt}
            imageTechy={this.props.data.imageTechy}
            imageAbout={this.props.data.imageAbout}
          />
          <Footer
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />
          {/* IF USING BACKGROUND IMAGE WITH GATSBY-IMAGE */}
          {/*<Img style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: -1,}} sizes={this.props.data.background.sizes}/>*/}
        </div>
      )
    }
    // Anything that ISN'T the main component articles (like "pages") ---------------------------------------------------------------------------------------------------
    else {
      content = (
        <div id="wrapper" className="page pageOverlay">
          <div
            style={{
              maxWidth: '1140px',
            }}
          >
            <Link to={`/`}>
              <h1 className="major">{siteTitle}</h1>
            </Link>
            {children()}
          </div>
        </div>
      )
    }
    //What's returned in either case ------------------------------------------------------------------------------------------------------------------------------------
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        {/*Needed to reset site title when coming back to home screen*/}
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
    # Start Images --------------------------------------------------------------------------------------------------
    # Background
    #background: imageSharp(id: { regex: "/bg.jpg/" }) {
    #  sizes(maxWidth: 1920) {
    #    ...GatsbyImageSharpSizes
    #  }
    #}
    # Games
    imageWoW: imageSharp(id: { regex: "/WoW.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageBDO: imageSharp(id: { regex: "/BDO.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePoE: imageSharp(id: { regex: "/PoE.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageBless: imageSharp(id: { regex: "/Bless.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Anime
    imageDBZ: imageSharp(id: { regex: "/DBZ.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageGundamWing: imageSharp(id: { regex: "/GundamWing.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageBleach: imageSharp(id: { regex: "/Bleach.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageBNHA: imageSharp(id: { regex: "/BNHA.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Music
    imageGackt: imageSharp(id: { regex: "/Gackt.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePerfectCircle: imageSharp(id: { regex: "/PerfectCircle.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageZedd: imageSharp(id: { regex: "/Zedd.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageMetallica: imageSharp(id: { regex: "/Metallica.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Videos
    imageMovies: imageSharp(id: { regex: "/Movies.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSeries: imageSharp(id: { regex: "/Series.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFanMade: imageSharp(id: { regex: "/FanMade.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageMonty: imageSharp(id: { regex: "/Monty.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Books
    imageCS: imageSharp(id: { regex: "/CS.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageRPO: imageSharp(id: { regex: "/RPO.jpg/" }) {
      resolutions(width: 130, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageWoWBooks: imageSharp(id: { regex: "/WoWBooks.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageDA: imageSharp(id: { regex: "/DA.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageLRPG: imageSharp(id: { regex: "/LRPG.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageKKC: imageSharp(id: { regex: "/KKC.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageGoT: imageSharp(id: { regex: "/GoT.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageGrisha: imageSharp(id: { regex: "/Grisha.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Misc
    imageMemes: imageSharp(id: { regex: "/Memes.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageHawt: imageSharp(id: { regex: "/Hawt.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageTechy: imageSharp(id: { regex: "/Techy.jpg/" }) {
      resolutions(width: 300, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAbout: imageSharp(id: { regex: "/About.jpg/" }) {
      resolutions(width: 180, height: 180) {
        ...GatsbyImageSharpResolutions
      }
    }
    # End Images --------------------------------------------------------------------------------------------------
  }
`
