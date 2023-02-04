import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import classes from './MainNavigation.module.scss'
import BurgerIcon from '../../../BurgerIcon/BurgerIcon'

const MainNavigation = (props: any) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>
          <HeaderLogo />
        </Link>
      </div>

      <nav
        className={`${classes.menuNav} ${classes.nav} ${navbarOpen ? `${classes.showMenu}` : ''}`}
      >
        <ul>
          <li>
            <NavLink
              to='/quotes'
              className={(navData) => (navData.isActive ? classes.active : '')}
              onClick={closeMenu}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-quote'
              className={(navData) => (navData.isActive ? classes.active : '')}
              onClick={closeMenu}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>

      <BurgerIcon onToggle={handleToggle} navbarOpen={navbarOpen} />

      {/* <button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button> */}
    </header>
  )
}

export default MainNavigation
