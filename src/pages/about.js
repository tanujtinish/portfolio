import Layout from "@/components/Layout";
import Head from "next/head";

import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

import Dance from "@/components/Dance";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio | About Page</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Tanuj Gupta, a software engineer specializing in full-stack development, distributed systems, and data engineering. Explore my projects and professional journey."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout>
          <About />

          {/* <Skills /> */}
          <Experience />
          <Education />

          <Dance />
        </Layout>
      </main>
    </>
  );
}
