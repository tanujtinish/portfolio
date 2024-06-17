import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import Experience from "../components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Layout from "@/components/Layout";

const ExperiencePage = () => {
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio | Experience Page</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Tanuj Gupta, a software engineer specializing in full-stack development, distributed systems, and data engineering. Explore my projects and professional journey."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <Experience
            styleObj={{ marginTop: "calc(var(--base-font-size) * (32 / 32))" }}
          />
        </Layout>
      </main>
    </>
  );
};

export default ExperiencePage;
