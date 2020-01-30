import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `Tan`,
      marginBottom: `1.5rem`,
      height: `4rem`,
    }}
  >
    <div
      style={{
        margin: `1rem auto`,
        marginLeft: `2rem`,
        maxWidth: 960,
        padding: `.1rem 3rem`,
        display: `block`,
        float: `left`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/*{siteTitle}*/}
          {'Vineeth Gutta'}
        </Link>
      </h2>
    </div>
    <div style={{
        margin: `1rem auto`,
        marginRight: '2rem',
        maxWidth: 960,
        padding: `0.1rem 4rem`,
        display: `block`,
        float: `right`,
      }}>
      <h3 style={{
        display: `inline-block`,
        padding: `0 1rem`,
        }}>
        <Link
          to="/about/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          
          {'About'}
        </Link>
      </h3>

      <h3 style={{
        display: `inline-block`,
        padding: `0 1rem`,
        }}>
        <Link
          to="/cv/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          
          {'CV'}
        </Link>  
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
