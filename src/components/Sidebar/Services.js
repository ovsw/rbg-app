import React from 'react'
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
        <a href="/">Residential</a>
      </li>
      <li>
        <a href="/">Commercial</a>
      </li>
      <li>
        <a href="/">Auto</a>
      </li>
    </List>
  </div>
)

export default Services
