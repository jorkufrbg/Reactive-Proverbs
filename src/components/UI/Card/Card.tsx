import classes from './Card.module.scss'

interface CardProps {
  children?: React.ReactNode
}

const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>
}

export default Card
