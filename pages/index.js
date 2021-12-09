import Head from 'next/head'
import About from "../components/About"
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ariel Adams | Front End Web Developer</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 text-center">
      <About/>
      <Skills/>
      <Projects/>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        </div>
      </main>
    </div>
  )
}
