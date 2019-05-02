import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => (
  <nav className="mainmenu_wrapper">
    <ul className="mainmenu nav sf-menu sf-js-enabled sf-arrows" style={{ touchAction: 'pan-y' }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="/">Residential</a>
        <ul>
          <li>
            <Link to="/window-repair">Window repair</Link>
          </li>
          <li>
            <Link to="/">Window Glass Replacement</Link>
          </li>
          <li>
            <Link to="/">Fully Framed Window Replacement</Link>
          </li>
          <li>
            <Link to="/">Shower Enclosures</Link>
          </li>
          <li>
            <Link to="/">Mirror Replacement</Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="/">Commercial</a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="/">Auto Glass</a>
      </li>
      <li>
        <a href="/">Testimonials</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </nav>
)

export default MainNav
