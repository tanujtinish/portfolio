import React from "react";
import blog1 from "../../public/images/articles/bc_data_for_your_app.png";
import blog2 from "../../public/images/articles/ethereum_part_1.png";

import Image from "next/image";
import { useRef } from "react";

import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
        bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:border-light
        "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
        sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

export default function AllArticles({ title, styleObj }) {
  return (
    <>
      <h2
        className="font-bold text-4xl w-full text-center mt-32 my-16"
        style={{ ...styleObj }}
      >
        {title || "All Articles"}
      </h2>

      <ul className="flex flex-col items-center relative">
        <Article
          date="July 1, 2023"
          img={blog1}
          title="Art of Mastering Ethereum Transactions: High-Speed Blockchain Data for Your Products"
          summary="Learn how to understand data on Ethereum Blockchain and how to power your app with blockchain data at high speed."
          link="https://medium.com/@tanujinusa/art-of-mastering-ethereum-transactions-high-speed-blockchain-data-for-your-products-5c1aa3e28136"
        />

        <Article
          date="July 8, 2024"
          img={blog2}
          title="Part 1: Demystifying Ethereum: Transactions, Account States, Transaction Types, and Events"
          summary="Welcome to Part 1 of our series, “Art of Mastering Ethereum Transactions: High-Speed Blockchain Data for Your Products.” Ethereum, as one of the leading blockchain platforms, presents a complex yet fascinating ecosystem of transactions, accounts, contracts, and events. Understanding these core concepts is crucial for anyone looking to delve into the world of decentralized applications (dApps) and smart contracts. This article aims to demystify the intricacies of Ethereum by exploring how transactions work, Types of accounts and their account states, various types of transactions, and the significance of events within the Ethereum network."
          link="https://medium.com/@tanujinusa/part-1-getting-started-with-ethereum-key-concepts-and-basics-1270e2091fb3"
        />

        <Article
          date="July 21, 2024"
          img={blog2}
          title="Part 2: Ethereum Blockchain: Understanding State Maintenance, Consensus, Block Addition, and Forking"
          summary="In this article, we delve into the intricate workings of the Ethereum blockchain, exploring how nodes maintain a consistent state across a decentralized network, and how new blocks are added to the blockchain. We’ll uncover the roles of consensus and execution clients in ensuring that all nodes remain synchronized. Furthermore, we will explain functions of validator nodes and the mechanisms of Proof of Work (PoW) and Proof of Stake (PoS)."
          link="https://medium.com/@tanujinusa/part-2-ethereum-blockchain-understanding-state-maintenance-consensus-block-addition-and-a3dc731ae855"
        />
      </ul>
    </>
  );
}
