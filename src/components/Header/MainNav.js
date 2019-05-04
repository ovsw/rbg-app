import React from 'react'
import { Link } from 'gatsby'

const MainNav = () => (
  <nav className="mainmenu_wrapper">
    <ul className="mainmenu nav sf-menu sf-js-enabled sf-arrows" style={{ touchAction: 'pan-y' }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/residential-services">Residential</Link>
        <ul>
          <li>
            <Link to="/residential/single-dual-pane-window-replacement">Single/Dual Pane Window Replacement</Link>
          </li>
          <li>
            <Link to="/residential/window-glass-repair">Window Glass Repair</Link>
          </li>
          <li>
            <Link to="/residential/glass-tabletops">Glass Tabletops</Link>
          </li>
          <li>
            <Link to="/residential/custom-mirrors">Custom Mirrors</Link>
          </li>
          <li>
            <Link to="/residential/shower-enclosures">Shower Enclosures</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/commercial-services">Commercial</Link>
        <ul>
          <li>
            <Link to="/commercial/storefront-metal-and-glass">Storefront Metal and Glass</Link>
          </li>
          <li>
            <Link to="/commercial/window-doors-glass-replacement">Window/Doors Glass Replacement</Link>
          </li>
          <li>
            <Link to="/commercial/custom-glass-tabletops">Custom Glass Tabletops</Link>
          </li>
          <li>
            <Link to="/commercial/half-inch-glass-walls-and-entrances">1/2" Glass Walls &amp; Entrances</Link>
          </li>
          <li>
            <Link to="/commercial/commercial-doors">Commercial Doors</Link>
          </li>
          <li>
            <Link to="/commercial/multi-slide-doors-partitions">Multi-Slide Doors/Partitions</Link>
          </li>
          <li>
            <Link to="/commercial/closure-hardware-replacement">Closure / Hardware Replacement</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/auto-glass">Auto Glass</Link>
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
