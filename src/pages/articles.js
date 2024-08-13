import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import blog1 from "../../public/images/articles/bc_data_for_your_app.png";
import blog2 from "../../public/images/articles/ethereum_part_1.png";

import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import AllArticles from "@/components/AllArticles";

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-darkGlass dark:bg-lightGlass
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="d-flex inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm  mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio| Articles Page</title>
        <meta
          name="description"
          content="Browse through Tanuj Gupta's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout>
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Art of Mastering Ethereum Transactions: High-Speed Blockchain Data for Your Products"
              summary="Learn how to understand data on Ethereum Blockchain and how to power your app with blockchain data at high speed."
              link="https://medium.com/@tanujinusa/art-of-mastering-ethereum-transactions-high-speed-blockchain-data-for-your-products-5c1aa3e28136"
            />

            <FeaturedArticle
              img={blog2}
              title="Part 1: Demystifying Ethereum: Transactions, Account States, Transaction Types, and Events"
              summary="Welcome to Part 1 of our series, “Art of Mastering Ethereum Transactions: High-Speed Blockchain Data for Your Products.” Ethereum, as one of the leading blockchain platforms, presents a complex yet fascinating ecosystem of transactions, accounts, contracts, and events. Understanding these core concepts is crucial for anyone looking to delve into the world of decentralized applications (dApps) and smart contracts. This article aims to demystify the intricacies of Ethereum by exploring how transactions work, Types of accounts and their account states, various types of transactions, and the significance of events within the Ethereum network."
              link="https://medium.com/@tanujinusa/part-1-getting-started-with-ethereum-key-concepts-and-basics-1270e2091fb3"
            />
          </ul>

          <AllArticles />
        </Layout>
      </main>
    </>
  );
}
