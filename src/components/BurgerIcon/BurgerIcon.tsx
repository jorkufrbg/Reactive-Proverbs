import { useState } from 'react'
import classes from './BurgerIcon.module.scss'

interface BurgerIconProps {
  children?: React.ReactNode
  onToggle: () => void
  navbarOpen: boolean
}

const BurgerIcon = (props: BurgerIconProps) => {
  //   console.log(props.navbarOpen)
  return (
    <button
      onClick={props.onToggle}
      className={`${classes.hamburger} ${props.navbarOpen ? classes['is-active'] : ''} `}
    >
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </button>
  )
}

export default BurgerIcon
