import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SubList = styled.ul`
  ${tw``};
  li:before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    margin-bottom: 0.15rem;
    margin-right: 0.5rem;
    display: inline-block;
    background-color: #6b6b6b;
    border-radius: 50%;
  }
  li a {
    color: ${props => props.theme.accentColor}!important;
  }
`

const SubItemListing = ({ items }) => (
  <SubList>
    {items.map(item => (
      <li key={item.link}>
        <Link to={item.link}>{item.title}</Link>
      </li>
    ))}
  </SubList>
)

export default SubItemListing
