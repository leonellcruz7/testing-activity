import Head from 'next/head'
import { Card, CardProps, Footer, CardContainer } from 'components'

import styles from '@/styles/index.module.css'

const Home = () => {
  const cards: CardProps[] = [
    {
      header: 'Documentation',
      description: 'Find in-depth information about Next.js features and API.',
      link: 'https://nextjs.org/docs'
    },
    {
      header: 'Learn',
      description: 'Learn about Next.js in an interactive course with quizzes!',
      link: 'https://nextjs.org/learn'
    },
    {
      header: 'Examples',
      description: 'Discover and deploy boilerplate example Next.js projects.',
      link: 'https://github.com/vercel/next.js/tree/canary/examples'
    },
    {
      header: 'Deploy',
      description:
        'Instantly deploy your Next.js site to a public URL with Vercel.',
      link: 'https://vercel.com/new'
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <CardContainer cards={cards} />
      </main>

      <Footer />
    </div>
  )
}

export default Home
