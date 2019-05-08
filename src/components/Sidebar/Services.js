import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const List = styled.div`
  li {
    display: block !important;
  }
  a {
    ${tw`font-bold`};
  }
`

const Services = () => (
  <div className="widget widget_flickr">
    <h3 className="widget-title">Our Services</h3>
    <hr className="divider_60_2 main_bg_color" />
    <List>
      <li>
        <Link to="/residential">Residential</Link>
      </li>
      <li>
        <Link to="/commercial">Commercial</Link>
      </li>
      <li>
        <Link to="/auto">Auto</Link>
      </li>
    </List>
  </div>
)

export default Services
