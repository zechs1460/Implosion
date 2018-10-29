import React from 'react'
import Img from 'gatsby-image'
import styles from '../components/Main.module.css'

class Dentures extends React.Component {
    render() {
        return (
            <div>
            <Img style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1
            }} 
            sizes={this.props.data.background.sizes} />
  
            <h3 className="major">Dentures</h3>
            <p>
              <strong>We offer different package for dentures: </strong>
            </p>

            <div className={styles.flexContainer}>

              <div className={styles.flexItems}>
                <Img className={styles.leftImg} resolutions={this.props.data.imagedenture1.resolutions} />
                <div className={styles.clear}>
                  <h4>Premium Denture: </h4>
                  <ul>
                    <li>familiar American and European molds with full-body anatomy</li>
                    <li>broad posterior occlusal tables and excellent wear resistance</li>
                    <li>natural characterization to make the denture lifelike</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img className={styles.leftImg} resolutions={this.props.data.imagedenture2.resolutions} />
                <div className={styles.clear}>
                  <h4>Custom Denture: </h4>
                  <ul>
                    <li>standard-anatomy, vacuum-fired, and good-wear resistant teeth</li>
                    <li>Package Includes a free trying and free shipping</li>
                    <li>Lucitone &#xAE; 199 Acrylic</li>
                    <li>Classic Teeth</li>
                    <li>Lincoln Dual Form V</li>
                  </ul>
                </div>
              </div>

              <div className={styles.flexItems}>
                <Img className={styles.leftImg} resolutions={this.props.data.imagedenture3.resolutions} />
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
              <p>
                Overnight rush services available. Please call to inquire.
            </p>
            </div>
            <p>
              We can inject with Lucitone &#xAE; 199, Nature-Cryl Pour and conventional
              flask any case. We are constantly reviewing the proper protocol for limiting
              cross-contamination in accordance with
            <a href="http://www.cdc.gov/hai/prevent/prevent_pubs.html"> infection control guidelines </a>
              developed by the centers for Disease Control, American Dental
              Association, and OSHA. We provide &quot;safe-t-bags&quot; to help prevent
              cross-contamination of shipping boxes and packing materials.
        </p>
            <p>
              We send an invoice with every case.&nbsp; Statements are sent on the
              1st of the month.&nbsp; If you require a month ending differently, please
              let us know. We can provide a 30-day billing cycle of your choice.&nbsp;
              Initially, we must have a credit card on file. The first case will be charged
              to your card.&nbsp; After the first case, you will be placed on a monthly
              billing as long as we have the credit card on file.&nbsp; You may pay by
              check or call to have your balance placed on your card.
        </p>
            <Img className={styles.rightImg} resolutions={this.props.data.imagedenture4.resolutions} />
            <p>
              Please let us know if other arrangements are needed.
        </p>
            <p>
              Ground shipping is free. There is a $25.00 fee on all rush orders.
        </p>
          </div>

        )
    }
}

export default Dentures

export const pageQuery = graphql`
query DenturesPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  background: imageSharp(id: { regex: "/bg.jpg/" }) {
    sizes(maxWidth: 1920) {
      ...GatsbyImageSharpSizes
    }
  }
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
}
`