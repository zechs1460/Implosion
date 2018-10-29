import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'
import { navigateTo } from 'gatsby-link'

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
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Dentures"
          className={`${this.props.article === 'Dentures' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Dentures</h3>
            <p>
              <strong>We offer different package for dentures: </strong>
            </p>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imagedenture1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Premium Denture: </h4>
                  <ul>
                    <li>
                      familiar American and European molds with full-body
                      anatomy
                    </li>
                    <li>
                      broad posterior occlusal tables and excellent wear
                      resistance
                    </li>
                    <li>
                      natural characterization to make the denture lifelike
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imagedenture2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Custom Denture: </h4>
                  <ul>
                    <li>
                      standard-anatomy, vacuum-fired, and good-wear resistant
                      teeth
                    </li>
                    <li>Package Includes a free trying and free shipping</li>
                    <li>Lucitone &#xAE; 199 Acrylic</li>
                    <li>Classic Teeth</li>
                    <li>Lincoln Dual Form V</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imagedenture3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Economy Denture: </h4>
                  <ul>
                    <li>Transitional or standard dentures</li>
                    <li>two layer acrylic teeth</li>
                    <li>aesthetic and affordability shades</li>
                    <li>Overnight services available*</li>
                    <li>can provide Titanium Bars for implant cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.clear}>
              <p>Overnight rush services available. Please call to inquire.</p>
            </div>
            <p>
              We can inject with Lucitone &#xAE; 199, Nature-Cryl Pour and
              conventional flask any case. We are constantly reviewing the
              proper protocol for limiting cross-contamination in accordance
              with
              <a href="http://www.cdc.gov/hai/prevent/prevent_pubs.html">
                infection control guidelines{' '}
              </a>
              developed by the centers for Disease Control, American Dental
              Association, and OSHA. We provide &quot;safe-t-bags&quot; to help
              prevent cross-contamination of shipping boxes and packing
              materials.
            </p>
            <p>
              We send an invoice with every case.&nbsp; Statements are sent on
              the 1st of the month.&nbsp; If you require a month ending
              differently, please let us know. We can provide a 30-day billing
              cycle of your choice.&nbsp; Initially, we must have a credit card
              on file. The first case will be charged to your card.&nbsp; After
              the first case, you will be placed on a monthly billing as long as
              we have the credit card on file.&nbsp; You may pay by check or
              call to have your balance placed on your card.
            </p>
            <Img
              className={styles.rightImg}
              resolutions={this.props.imagedenture4.resolutions}
            />
            <p>Please let us know if other arrangements are needed.</p>
            <p>
              Ground shipping is free. There is a $25.00 fee on all rush orders.
            </p>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Partials"
          className={`${this.props.article === 'Partials' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">FRS&nbsp;Partials</h3>
            <Img
              className={styles.leftImg}
              resolutions={this.props.imagePartial1.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imagePartial2.resolutions}
            />
            <div className={styles.clear}>
              <p>
                The most important procedure is the preliminary or diagnostic
                cast. The cast must be surveyed and then designed for a
                removable partial denture. This preliminary survey and design
                will form a basis for restorative treatment of abutment teeth
                and will indicate to the technician certain procedures that may
                need to be completed before a final impression is made.
              </p>
            </div>

            <Img
              className={styles.rightImg}
              resolutions={this.props.imagePartial3.resolutions}
            />
            <strong className={styles.paddingTop}>
              We have three packages:{' '}
            </strong>
            <ul className={styles.paddingBottom}>
              <li>Premium</li>
              <li>Custom</li>
              <li>Economy (transitional partials)</li>
            </ul>

            <Img
              className={styles.rightImg}
              resolutions={this.props.imagePartial4.resolutions}
            />
            <strong className={styles.paddingTop}>
              We have different choices for Partial Dentures:{' '}
            </strong>
            <ul className={styles.paddingBottom}>
              <li>Acrylic with wrought wire clasps</li>
              <li>Flexible FRS </li>
              <li>Cast Metal Vitallium 2000</li>
              <li>Combo Crown &amp; Bridge </li>
            </ul>
            <Img
              className={styles.leftImg}
              resolutions={this.props.imagePartial5.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imagePartial6.resolutions}
            />
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="CrownAndBridge"
          className={`${
            this.props.article === 'CrownAndBridge' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Crown & Bridge</h3>

            <div className={styles.clear}>
              <p>
                <strong>
                  Our In-house milling system allows us to create, mill, finish,
                  and return IPS e.max CAD crowns in 3 days, and Zirconia crowns
                  in 5 days.{' '}
                </strong>
                Our partnership with DENTSPLY allows us to offer a wide variety
                of services normally to difficult to obtain.
              </p>
            </div>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageCrownAndBridge5.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Crown & Bridge</h4>
                  <ul>
                    <li>We accept digital files!</li>
                    <li>All products finished under microscope</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageCrownAndBridge2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>E.max Crowns</h4>
                  <ul>
                    <li>IPS e.max CAD Full-Contour</li>
                    <li>CAD/CAM design and milling</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageCrownAndBridge4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Zirconia Crowns</h4>
                  <ul>
                    <li>BruxZir, ULTRA, InCoris TZI</li>
                    <li>In Vita A1 - D4 Shade</li>
                    <li>Strength 1450 Mpa</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOther5.resolutions}
                />
                <div className={styles.clear}>
                  <h4>PFMs</h4>
                </div>
              </div>
            </div>

            <p>
              <a href="https://www.dentsplysirona.com/en-us">
                DENTSPLY Prident{' '}
              </a>{' '}
              is an ISO 9001 certified laboratory and a wholly owned subsidiary
              of DENTSPLY International, Inc. DENTSPLY Prident guarantees that
              the materials used in the finished medical device produced at
              DENTSPLY Prident are cleared by the FDA and are legally
              distributed in the US.
            </p>
            <p>The Turn-around Time is less than 15 days for the following:</p>
            <ul>
              <li>PFM</li>
              <li>Captek &#x2122; </li>
              <li>All-Ceramic &#xAE;</li>
              <li>Radica </li>
              <li>Cercon &#xAE; </li>
            </ul>

            <Img
              className={styles.leftImg}
              resolutions={this.props.imageCrownAndBridge1.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imageCrownAndBridge3.resolutions}
            />
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Cast"
          className={`${this.props.article === 'Cast' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Cast Metal Frames</h3>

            <Img
              className={styles.leftImg}
              resolutions={this.props.imageCast1.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imageCast2.resolutions}
            />

            <div className={styles.clear}>
              <p>
                The metal framework does not contact the gums. Thus, as the gums
                resorb, this type of partial does not sink with them and rarely
                requires relines. Because the teeth are altered by the dentist
                beforehand, there are fewer limitations in the placement of
                clasps, and they are less likely to be seen than the wrought
                wire clasps of the treatment partial. Modern frameworks are cast
                from an extremely strong alloy called chrome cobalt which can be
                cast very thin and are much less likely to break than the all
                plastic variety. They are also much less noticeable to the
                tongue.
              </p>
            </div>
            <ul>
              <li>Vitallium &#xAE; 2000 Metal</li>
              <li>Dentures come in Economy, Premium, or Custom deals</li>
              <li>Product of Glidewell</li>
              <li>In Vita A1 - D4 Shade</li>
            </ul>
            <p>
              The largest single advantage that cast metal framework partial
              dentures have over the newer flexible framework partials is that
              sore spots are almost never an issue since neither the framework,
              nor the plastic extensions contact the soft oral tissues with any
              force! Patients who exhibit the symptoms of TMJ, or who are known
              bruxers are much better off with cast metal partials than with
              flexible framework partials.
            </p>

            <Img
              className={styles.leftImg}
              resolutions={this.props.imageCast3.resolutions}
            />
            <Img
              className={styles.rightImg}
              resolutions={this.props.imageCast4.resolutions}
            />
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Other"
          className={`${this.props.article === 'Other' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Other Products</h3>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOther1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Abutments</h4>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOther2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Nightguards</h4>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOther3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Wax patterns</h4>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageOther4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Study Models</h4>
                </div>
              </div>
            </div>

            <p>
              And anything else you need, <strong>just ask!</strong>
            </p>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Digital"
          className={`${this.props.article === 'Digital' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Digital</h3>

            <p>
              With our digital equipment and in-house milling system, we can
              efficiently and accurately create fully anatomical crowns and
              bridges as well as veneers, and inlays/onlays.
            </p>

            <div className={styles.flexContainer}>
              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital1.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Digital Scanning</h4>
                  <ul>
                    <li>
                      Precise and efficient scans make your ending products
                      accurate
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital2.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Natural Esthetics</h4>
                  <ul>
                    <li>Beautiful and Natural look</li>
                    <li>Designs based off surrounding dentition</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital3.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Virtual Try-In</h4>
                  <ul>
                    <li>
                      3D-generated Patient Pictures allows facial features to be
                      taken into account
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital4.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Virtual Articulation</h4>
                  <ul>
                    <li>
                      Virtual Articulation allows us to easily determine contact
                      surfaces
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital5.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Inlay/Onlay and Veneers</h4>
                  <ul>
                    <li> Anything you need, we can make!</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital6.resolutions}
                />
                <div className={styles.clear}>
                  <h4>Crown and Bridge</h4>
                  <ul>
                    <li>Full Contour or copings</li>
                    <li>
                      IPS e.max, inCoris TZI/ZI (BruxZir), Lava, VITABLOCS, and
                      many more!
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital7.resolutions}
                />
                <div className={styles.clear}>
                  <h4>In-House Milling</h4>
                  <ul>
                    <li>
                      We mill it all right here so you get your case back ASAP!
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img
                  className={styles.leftImg}
                  resolutions={this.props.imageDigital8.resolutions}
                />
                <div className={styles.clear}>
                  <h4>CEREC Connect</h4>
                  <ul>
                    <li>
                      Finally go model free and send us digital scans for the
                      best results!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="About"
          className={`${this.props.article === 'About' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">About Us</h3>

            <div className={styles.clear}>
              <Img
                className={styles.leftImg}
                resolutions={this.props.imageAbout1.resolutions}
              />
              <p>
                Claudio Dental Laboratory (formally known as Collins Dental
                Laboratory) is owned and managed by Pedro Claudio Jr. CDT.
                Established in 1948 by Thomas Edwards Collins Sr. CDT, the
                legacy of the founder continues with insistence on quality,
                affordability, prompt and friendly service.
              </p>
            </div>

            <div className={styles.clear}>
              <Img
                className={styles.rightImg}
                resolutions={this.props.imageAbout2.resolutions}
              />
              <p>
                Pedro&#39;s son Joseph Claudio joins us here at CDL as the
                Director of the Crown and Bridge department. He received his
                Bachelors in Computer Information Systems in 2013, and has been
                studying Crown and Bridge Dental Technology ever since. Having
                undergone multiple training workshops and seminars, he is ready
                to take full advantage of the inLab software to create the most
                computer accurate and efficient restorations available.
              </p>
            </div>

            <div className={styles.clear}>
              <Img
                className={styles.leftImg}
                resolutions={this.props.imageAbout3.resolutions}
              />
              <p>
                <strong>
                  We firmly believe that communication between the dentist,
                  patient, and the specialist involved is key in having happy
                  patients.
                </strong>
              </p>
            </div>

            <div className={styles.clear}>
              <Img
                className={styles.rightImg}
                resolutions={this.props.imageAbout4.resolutions}
              />
              <p>
                We are a state of the art laboratory, certified by South
                Carolina State Board of Dentistry, Southeastern Conference of
                Dental Laboratories and the Toombs Montgomery Chambers of
                Commerce. Pedro Claudio CDT is also a proud member of the
                Watermelon Creek Baptist Church.
              </p>
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Contact"
          className={`${this.props.article === 'Contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Contact />
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="ML"
          className={`${this.props.article === 'ML' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Mailing Label</h3>

            <p>Please click the image to print out a Mailing Label.</p>

            <div onClick={() => window.print()}>
              <Img resolutions={this.props.imageML.resolutions} />
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="RX"
          className={`${this.props.article === 'RX' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">RX Form</h3>

            <p>
              Please click the image to print out an RX form. Fill out the form
              and send it with the case.
            </p>

            <div onClick={() => window.print()}>
              <Img resolutions={this.props.imageRX.resolutions} />
            </div>
          </div>
          {close}
        </article>
        {/*---------------------------------------------------------------------------------------------------*/}
        <article
          id="Fixed"
          className={`${this.props.article === 'Fixed' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div>
            <h3 className="major">Fixed RX Form</h3>

            <p>
              Please click the image to print out a Fixed RX form. Fill out the
              form and send it with the case.
            </p>

            <div onClick={() => window.print()}>
              <Img resolutions={this.props.imageFixed.resolutions} />
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
