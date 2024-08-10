import Layout from "@/components/Layout";
import Head from "next/head";

import TransitionEffect from "@/components/TransitionEffect";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Tanuj Gupta, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout>
          <Projects />
        </Layout>
      </main>
    </>
  );
}
