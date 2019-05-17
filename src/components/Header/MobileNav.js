import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { slide as MobileMenu } from 'react-burger-menu'

const MenuItem = styled.div`
  ${tw`block py-2`};
  border-bottom: 1px solid #545454;
  a {
    color: white;
  }
`
const SubMenuWrapper = styled.ul`
  ${tw`pt-2 mb-0 text-sm`};
  li {
    color: green;
    ${tw`py-2`};
    border-bottom: 1px solid #545454;
  }
  li:last-child {
    border-bottom: none;
  }
`

const MobileNav = ({ isMenuOpen, updateMenuState, closeMenu }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteNav {
            title
            link
            children {
              title
              link
            }
          }
        }
      }
    }
  `)

  const mobileMenuStyles = {
    bmCrossButton: {
      height: '44px',
      width: '44px',
    },
    bmCross: {
      background: '#81d612',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#252525',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#252525',
    },
    bmItemList: {
      color: '#b8b7ad',
    },

    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  }

  return (
    <MobileMenu
      right
      isOpen={isMenuOpen}
      onStateChange={updateMenuState}
      customBurgerIcon={false}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      styles={mobileMenuStyles}
      disableAutoFocus
    >
      {data.site.siteMetadata.siteNav.map(item => (
        <MenuItem key={item.link}>
          <Link to={item.link}>{item.title}</Link>
          {item.children[0].title !== 'empty' && (
            <SubMenuWrapper>
              {item.children.map(subitem => (
                <li key={subitem.link}>
                  <Link to={subitem.link} onClick={closeMenu}>
                    {subitem.title}
                  </Link>
                </li>
              ))}
            </SubMenuWrapper>
          )}
        </MenuItem>
      ))}
    </MobileMenu>
  )
}

export default MobileNav
