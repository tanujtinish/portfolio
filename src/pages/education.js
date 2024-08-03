import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import Education from "../components/Education";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

const EducationPage = () => {
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio | Education Page</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Tanuj Gupta, a software engineer specializing in full-stack development, distributed systems, and data engineering. Explore my educational journey."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout>
          <Education
            styleObj={{ marginTop: "calc(var(--base-font-size) * (32 / 32))" }}
          />
        </Layout>
      </main>
    </>
  );
};

export default EducationPage;
