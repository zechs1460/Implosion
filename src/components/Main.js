import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'
import Privacy from './Privacy'
import Terms from './Terms'

class Main extends React.Component {
  render() {
    const close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    ) 
    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* ----------------------------------------------------------------------------------------------------- */}
        <article
          id="Games"
          className={`${this.props.article === 'Games' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Games</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/games/wow/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageWoW.resolutions}
                      alt="World of Warcraft"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">WoW</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/games/bdo/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageBDO.resolutions}
                      alt="Black Desert Online"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">BDO</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/games/poe/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imagePoE.resolutions}
                      alt="Path of Exile"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">PoE</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/games/bless/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageBless.resolutions}
                      alt="Bless Online"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Bless</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* ---- */}
          {close}
        </article>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <article
          id="Anime"
          className={`${this.props.article === 'Anime' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Anime</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/anime/gundam/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageGundamWing.resolutions}
                      alt="Gundam"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Gundam Wing</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/anime/dbz/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageDBZ.resolutions}
                      alt="Dragon Ball Z"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">DBZ</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/anime/bnha/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageBNHA.resolutions}
                      alt="Boku no Hero Academia"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Boku No Hero Academia</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/anime/bleach/">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageBleach.resolutions}
                      alt="Bleach"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Bleach</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* ---- */}
          {close}
        </article>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <article
          id="Music"
          className={`${this.props.article === 'Music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Music</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/music/gackt">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageGackt.resolutions}
                      alt="Gackt Camui"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Gackt</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/music/zedd">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageZedd.resolutions}
                      alt="Zedd"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Zedd</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/music/perfectcircle">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imagePerfectCircle.resolutions}
                      alt="Perfect Circle"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Perfect Circle</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="music/metallica">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageMetallica.resolutions}
                      alt="Metallica"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Metallica</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {close}
        </article>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <article
          id="Video"
          className={`${this.props.article === 'Video' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Video</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/video/movies">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageMovies.resolutions}
                      alt="Movies"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Movies</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/video/series">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageSeries.resolutions}
                      alt="Series"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Series</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/video/fanmade">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageFanMade.resolutions}
                      alt="Fan Made"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Fan Made</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/video/monty">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageMonty.resolutions}
                      alt="Monty Oum"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Monty Oum</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {close}
        </article>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <article
          id="Books"
          className={`${this.props.article === 'Books' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Books</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/books/rpo">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageRPO.resolutions}
                      alt="Books"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Ready Player One</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/books/wowbooks">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageWoWBooks.resolutions}
                      alt="World of Warcraft novels"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">WoW Books</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/books/da">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageDA.resolutions}
                      alt="Demon Accords"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Demon Accords</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/books/lrpg">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageLRPG.resolutions}
                      alt="Lit RPGs"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Lit RPGs</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/books/kkc">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageKKC.resolutions}
                      alt="Kingkiller Chronicals"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Kingkiller Chronicals</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/books/got">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageGoT.resolutions}
                      alt="Song of Fire and Ice, Game of Thrones"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Song of Fire and Ice</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/books/cs">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageCS.resolutions}
                      alt="Chaos Seeds"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Chaos Seeds</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {close}
        </article>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <article
          id="Misc"
          className={`${this.props.article === 'Misc' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="articleHeader">Misc</h2>
          {/* ---- */}
          <div className="row">
            <div className="row__inner">
              {/* ---- */}
              <div className="tile" id="img1">
                <div className="tile__media">
                  <Link to="/misc/memes">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageMemes.resolutions}
                      alt="Memes"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Favorite Memes</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img2">
                <div className="tile__media">
                  <Link to="/misc/hawt">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageHawt.resolutions}
                      alt="Hot boys, Hawt bois, Hottest Guys"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Hottest Guys</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img3">
                <div className="tile__media">
                  <Link to="/misc/techy">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageTechy.resolutions}
                      alt="Technical"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">Techy</div>
                </div>
              </div>
              {/* ---- */}
              <div className="tile" id="img4">
                <div className="tile__media">
                  <Link to="/misc/about">
                    <Img
                      className="tile__img"
                      resolutions={this.props.imageAbout.resolutions}
                      alt="About Me"
                    />
                  </Link>
                </div>
                <div className="tile__details">
                  <div className="tile__title">About Me</div>
                </div>
              </div>
              {/* ---- */}
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Privacy"
          className={`${this.props.article === 'Privacy' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Privacy />
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Terms"
          className={`${this.props.article === 'Terms' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Terms />
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
      </div>
    )
  }
}

export default Main

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}
