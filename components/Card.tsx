import styles from '@/styles/index.module.css'

export interface CardProps {
  header: string
  description: string
  link: string
}

export const Card: React.FC<CardProps> = ({ header, description, link }) => {
  return (
    <a aria-label='card' href={link} className={styles.card}>
      <h3>{header}</h3>
      <p>{description}</p>
    </a>
  )
}
