import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/device'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const ui = {
  HeaderWrapper: styled.div`
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-top: 10px solid #0E185F;
    position: fixed;
    background-color: #f2f2f2;
    top: 0;
    z-index: 200;

    .nav-active {
      display: block;
    }

  `,
  Header: styled.header`
    max-width: 1280px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-hamburguer {
      display: none;
    }

    @media ${device.mobileL} {
      margin: 0 2rem;

      .navbar-hamburguer {
        display: block;
      }
    }
  `,
  Logo: styled.div`
    span {
      display: flex;
      align-items: center;
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 400;
    }

    @media ${device.mobileL} {
      span {
        font-size: 30px;
      }
    }
  `,
  LogoImg: styled.img``,
  Nav: styled.nav`
    @media ${device.mobileL} {
      display: none;
      background-color: rgba(0, 0, 0, .9);
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
    }
  `,
  NavList: styled.ul`
    display: flex;
    height: 100%;
    z-index: 1000;
    
    .navbar-toggle {
      display: none;
    }

    @media ${device.mobileL} {
      display: block;

      .navbar-toggle {
        display: block;
        float: right;
        margin: 20px;
      }
    }
    `,
  NavItem: styled.li`
    margin-right: 30px;

    :last-child {
      margin-right: 0;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
  `,
  NavLink: styled(NavLink)`
    display: inline-block;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      height: 2px;
      background-color: #e91e63;
      transform-origin: bottom right;
      transition: transform 0.5s ease;
      transform: scaleX(0);
    }

    :hover::after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
    @media ${device.mobileL} {
      color: #fff;
      width: 100%;
      padding: 20px;
    }
  `
}

const SlidebarData = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: 'Sobre mi',
    path: '/sobremi'
  },
  {
    id: 3,
    title: 'Certificaciones',
    path: '/certificaciones'
  },
  {
    id: 4,
    title: 'Proyectos',
    path: '/proyectos'
  },
  {
    id: 5,
    title: 'Experiencia',
    path: '/experiencias'
  },
  {
    id: 6,
    title: 'Contacto',
    path: '/contacto'
  },

]

const Navigation = () => { 
  const [navToggle, setNavToggle] = useState(false)

  const handleToogle = () => {
    setNavToggle(!navToggle)
  }
  return (
    <>
      <ui.HeaderWrapper>
        <ui.Header>
          <ui.Logo>
            <NavLink to='/'>
              <span>Kevin<FaIcons.FaDev color='#E83A14' style={{fontSize: '32px'}} /></span>
            </NavLink>
          </ui.Logo>
          <FaIcons.FaBars onClick={handleToogle} className='navbar-hamburguer' style={{fontSize: '30px'}}/>
          <ui.Nav className={navToggle ? 'nav-active' : ''}>
            <ui.NavList onClick={handleToogle}>
              <AiIcons.AiOutlineClose onClick={handleToogle} className='navbar-toggle' style={{ fontSize: '30px', color: '#fff' }} />
              {
                SlidebarData.map(item => (
                  <ui.NavItem key={item.id}>
                    <ui.NavLink to={item.path}>{item.title}</ui.NavLink>
                  </ui.NavItem>
                ))
              }
            </ui.NavList>
          </ui.Nav>
        </ui.Header>
      </ui.HeaderWrapper>
    </>
  )
}

export default Navigation