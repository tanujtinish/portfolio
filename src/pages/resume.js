import PdfViewer from "@/components/common/PdfViewer";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

export default function resume() {
  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio | Resume Page</title>
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
          <PdfViewer pdfUrl={"/Tanuj Gupta - Resume.pdf"} />;
        </Layout>
      </main>
    </>
  );
}
