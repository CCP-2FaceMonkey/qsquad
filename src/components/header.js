import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000`, //#111d2a
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <div style={{ maxWidth: `100px` }}>
      <Image imageName="gatsby-astronaut.png"/>
      </div>
      <h1 style={{ margin: 0, alignSelf: 'center', justifySelf: 'end' }}>
        <Link
          to="/"
          style={{
            color: `#05d98e`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Quarantine Squad`,
}

export default Header
