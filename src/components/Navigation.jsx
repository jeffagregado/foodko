import { Link } from "gatsby"
import React from "react"

function Navigation(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          {props.siteTitle}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-links">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item active">
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="book-now">Book Now</button>
      </nav>
    </>
  )
}

export default Navigation
