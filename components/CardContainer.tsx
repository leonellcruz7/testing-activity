import { Card, CardProps } from './Card'
import styles from '@/styles/index.module.css'

interface CardContainerProps {
  cards: CardProps[]
}

export const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div aria-label='card-container' className={styles.grid}>
      {cards.map(({ header, description, link }) => (
        <Card
          key={header}
          header={header}
          description={description}
          link={link}
        />
      ))}
    </div>
  )
}
