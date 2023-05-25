import type { NextPage } from 'next'
import Head from 'next/head'
import TodoList from '../TodoList'

const Home: NextPage = () => {
  // Get the current date
  const currentDate = new Date();

  // Format the date to a string
  const dateString = currentDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Interactive todo list made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          My Todo List - {dateString}
        </h1>

        <TodoList />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
