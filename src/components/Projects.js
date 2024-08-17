import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NFTSpaceProjectImage from "../../public/images/projects/nft_portal.png";
import TaskManegerImage from "../../public/images/projects/task_manager.png";
import TikTokScrapperImage from "../../public/images/projects/tiktokScrapper.png";
import FullStackChatAppImage from "../../public/images/projects/fullStackChatAppImage.png";
import RocksDbProjectImage from "../../public/images/projects/rocksDbProject.png";

import TransitionEffect from "@/components/TransitionEffect";
import { NodeJSIcon } from "@/components/common/teckStackIcons";

import { FaDatabase, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiSelenium, SiWeb3Dotjs } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiApacheairflow } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiApachekafka } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiElasticsearch } from "react-icons/si";
import { SiRocksdb } from "react-icons/si";
import { SiIpfs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiApachecassandra } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineKubernetes } from "react-icons/ai";

import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";

import { SiApachehive } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { GrHadoop } from "react-icons/gr";
import { SiPresto } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import ApacheLuceneLogoIcon from "../components/common/apacheLuceneLogoIcon";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";
import { useEffect, useState } from "react";
import flaskIcon from "@/components/common/flaskIcon";
import FlaskIcon from "@/components/common/flaskIcon";
import AddInfoModal from "@/components/common/AddInfoModal";
import CLangIcon from "./common/cLangIcon";
import { DiRedis } from "react-icons/di";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  teckStacks,
}) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        {teckStacks && (
          <div
            className="mt-2 flex items-center"
            style={{
              gap: "1em",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {teckStacks.map((teckStack) => (
              <>{teckStack}</>
            ))}
          </div>
        )}
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github, teckStacks }) => {
  return (
    <article
      className="relative flex w-full  items-center justify-start rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4 flex-col 
      "
      style={{ height: "100%" }}
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      {img && (
        <Link
          href={link}
          target={"_blank"}
          className="h-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            className="h-auto w-full"
            alt={title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
            style={{ height: "95%" }}
          />
        </Link>
      )}
      <div
        className={
          img
            ? "flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
            : "flex w flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
        }
      >
        {/* <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span> */}
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        {teckStacks && (
          <div
            className="mt-2 flex items-center"
            style={{
              gap: "1em",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {teckStacks.map((teckStack) => (
              <>{teckStack}</>
            ))}
          </div>
        )}
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects({ styleObj, title }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect the theme using Tailwind's dark mode class or other logic
  useEffect(() => {
    // Assuming Tailwind's dark mode uses a class 'dark' on the root element
    const root = window.document.documentElement;
    const darkMode = root.classList.contains("dark");
    setIsDarkMode(darkMode);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const darkModeUpdated = root.classList.contains("dark");
        setIsDarkMode(darkModeUpdated);
      });
    });

    observer.observe(root, { attributes: true });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <AnimatedText
        text={title ? title : "Imagination Trumps Knowledge!"}
        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        styleObj={{ ...styleObj }}
      />
      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            type="Featured Project"
            title="Revolutionizing NFT Management: A Full-Stack Platform Built with React.js, Node.js, GraphQL, and AWS"
            summary="This innovative platform offers an immersive way to explore and manage NFTs, with features like wallet reports, collection tracking, and creator insights. Built with React.js, Node.js, and GraphQL, it leverages AWS for scalable cloud infrastructure and integrates a robust blockchain index using Cassandra, MongoDB, and Ethereum to efficiently handle over 20 million transactions."
            img={NFTSpaceProjectImage}
            link="https://github.com/tanujtinish/web3_shopping_frontend"
            github="https://github.com/tanujtinish/web3_shopping_frontend"
            teckStacks={[
              <AddInfoModal info="Node.js">
                <FaNodeJs size={"2em"} color="#68A063" />
              </AddInfoModal>,

              <AddInfoModal info="React.js">
                <RiReactjsFill size={"2em"} color="#61DAFB" />
              </AddInfoModal>,

              <AddInfoModal info="Web3.js">
                <SiWeb3Dotjs size={"2em"} color="#F16822" />
              </AddInfoModal>,

              <AddInfoModal info="Ethereum">
                <FaEthereum
                  size={"2em"}
                  color={isDarkMode ? "white" : "#3C3C3D"}
                />
              </AddInfoModal>,

              <AddInfoModal info="Apache Airflow">
                <SiApacheairflow size={"2em"} color="#017CEE" />
              </AddInfoModal>,

              <AddInfoModal info="GraphQL">
                <GrGraphQl size={"2em"} color="#E10098" />
              </AddInfoModal>,

              <AddInfoModal info="MongoDB">
                <SiMongodb size={"2em"} color="#47A248" />
              </AddInfoModal>,

              <AddInfoModal info="Apache Kafka">
                <SiApachekafka
                  size={"2em"}
                  color={isDarkMode ? "#ffffff" : "#231F20"}
                />
              </AddInfoModal>,

              <AddInfoModal info="Elasticsearch">
                <SiElasticsearch size={"2em"} color="#005571" />
              </AddInfoModal>,

              <AddInfoModal info="IPFS">
                <SiIpfs size={"2em"} color="#65C2CB" />
              </AddInfoModal>,

              <AddInfoModal info="Docker">
                <FaDocker size={"2em"} color="#2496ED" />
              </AddInfoModal>,

              <AddInfoModal info="Apache Cassandra">
                <SiApachecassandra size={"2em"} color="#1287B1" />
              </AddInfoModal>,

              <AddInfoModal info="JavaScript">
                <IoLogoJavascript size={"2em"} color="#F7DF1E" />
              </AddInfoModal>,

              <AddInfoModal info="HTML5">
                <FaHtml5 size={"2em"} color="#E34F26" />
              </AddInfoModal>,

              <AddInfoModal info="CSS3">
                <FaCss3Alt size={"2em"} color="#1572B6" />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 row-span-10">
          <Project
            type="Website Template"
            title="Fashion-Focused TikTok Scraper with Machine Learning-Driven Content Filtering"
            img={TikTokScrapperImage}
            summary={
              "This project involved building a specialized TikTok scraper to extract fashion-related content, utilizing Python and Selenium for web scraping and MongoDB for data storage. The project assigns relevance scores to posts using machine learning and NLP, ensuring that only the most relevant fashion content is retained. Deployed on AWS with a scalable MongoDB Atlas cluster, this solution balances efficiency with cost-effectiveness."
            }
            link="https://github.com/tanujtinish/TikTok_Scrapper"
            github="https://github.com/tanujtinish/TikTok_Scrapper"
            teckStacks={[
              <AddInfoModal info="Selenium">
                <SiSelenium size={"2em"} color="#43B02A" />
              </AddInfoModal>,

              <AddInfoModal info="MongoDB">
                <SiMongodb size={"2em"} color="#47A248" />
              </AddInfoModal>,

              <AddInfoModal info="Python">
                <FaPython size={"2em"} color="#306998" />
              </AddInfoModal>,

              <AddInfoModal info="Flask">
                <FlaskIcon
                  width={"2em"}
                  height={"2em"}
                  color={isDarkMode ? "#ffffff" : "#000000"}
                />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12 row-span-10">
          <Project
            type="Website Template"
            title="Comprehensive Full Stack Chat Application with Dockerized Microservices"
            summary={
              "This full stack chat application, built using React, Spring Boot, and WebSockets, features a robust architecture with microservices orchestrated through Eureka and Docker Compose. The project includes extensive logging, error handling, and both unit and integration testing for frontend and backend services, ensuring reliability and scalability in a containerized environment."
            }
            img={FullStackChatAppImage}
            link="https://github.com/tanujtinish/full_stack_chat_application"
            github="https://github.com/tanujtinish/full_stack_chat_application"
            teckStacks={[
              <AddInfoModal info="Spring Boot">
                <BiLogoSpringBoot size={"2em"} color="#6DB33F" />
              </AddInfoModal>,

              <AddInfoModal info="Java">
                <FaJava size={"2em"} color="#007396" />
              </AddInfoModal>,

              <AddInfoModal info="Node.js">
                <FaNodeJs size={"2em"} color="#68A063" />
              </AddInfoModal>,

              <AddInfoModal info="Docker">
                <FaDocker size={"2em"} color="#2496ED" />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="Website Template"
            title="Proprietary Task Manager: A Jira-Like Solution with React, Node.js, and MongoDB"
            summary={
              "This proprietary task management application, inspired by Jira, is built using React, Node.js, and MongoDB. It provides a streamlined interface for managing tasks, tracking progress, and enhancing team collaboration. The project focuses on delivering a robust and intuitive tool tailored to the needs of modern development teams."
            }
            img={TaskManegerImage}
            link="https://github.com/tanujtinish/task_manager"
            github="https://github.com/tanujtinish/task_manager"
            teckStacks={[
              <AddInfoModal info="Node.js">
                <FaNodeJs size={"2em"} color="#68A063" />
              </AddInfoModal>,

              <AddInfoModal info="React.js">
                <RiReactjsFill size={"2em"} color="#61DAFB" />
              </AddInfoModal>,

              <AddInfoModal info="MongoDB">
                <SiMongodb size={"2em"} color="#47A248" />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="Website Template"
            title="High-Performance Elastic Search Server in Go: Optimized Search API with MongoDB"
            summary={
              "This project involves developing a multithreaded Elastic Search server in Go, designed to enhance search query performance on MongoDB. By leveraging Go's concurrency features, the server delivers efficient and fast search capabilities through its robust API, making it ideal for high-demand applications."
            } // img={NFTSpaceProjectImage}
            link="https://github.com/tanujtinish/Go-Elastic-Search-Server"
            github="https://github.com/tanujtinish/Go-Elastic-Search-Server"
            teckStacks={[
              <AddInfoModal info="Go (Golang)">
                <FaGolang size={"2em"} color="#00ADD8" />
              </AddInfoModal>,

              <AddInfoModal info="MongoDB">
                <SiMongodb size={"2em"} color="#47A248" />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="Website Template"
            title="Optimize Reads In LSM Based Database (RocksDB)"
            summary={
              "Proposed a probabilistic constant time solution to reduce high read latency for high-read/low-write data in LSM Tree based Rocks DB, an embedded key-value store. We solve this problem using probabilistic data structures(Bloom filters)."
            }
            img={RocksDbProjectImage}
            link="https://github.com/tanujtinish/Optimize_LSM_Based_Database_Reads"
            github="https://github.com/tanujtinish/Optimize_LSM_Based_Database_Reads"
            teckStacks={[
              <AddInfoModal info="C++ Language">
                <CLangIcon width={"2em"} height={"2em"} color="#A8B9CC" />
              </AddInfoModal>,

              <AddInfoModal info="Database">
                <FaDatabase size={"2em"} color="#F29111" />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="Website Template"
            title="Blockchain-to-Database Indexer: High-Performance Data Pipelines and Storage"
            summary={
              "This project involves designing a robust blockchain indexer that leverages Cassandra, MongoDB, Hadoop, Ethereum, and Redis to efficiently store and query over 20 million blockchain transactions, including more than 1 billion NFT and ERC20 transfers. The solution features distributed data pipelines built with Airflow, Spark, and Node.js, capable of processing millions of daily operations."
            }
            // img={NFTSpaceProjectImage}
            link="https://github.com/tanujtinish/blockchain_to_database_indexer"
            github="https://github.com/tanujtinish/blockchain_to_database_indexer"
            teckStacks={[
              <AddInfoModal info="Apache Airflow">
                <SiApacheairflow size={"2em"} color="#017CEE" />
              </AddInfoModal>,

              <AddInfoModal info="Python">
                <FaPython size={"2em"} color="#306998" />
              </AddInfoModal>,

              <AddInfoModal info="Node.js">
                <FaNodeJs size={"2em"} color="#68A063" />
              </AddInfoModal>,

              <AddInfoModal info="Go (Golang)">
                <FaGolang size={"2em"} color="#00ADD8" />
              </AddInfoModal>,

              <AddInfoModal info="Ethereum">
                <FaEthereum
                  size={"2em"}
                  color={isDarkMode ? "white" : "#3C3C3D"}
                />
              </AddInfoModal>,

              <AddInfoModal info="Redis">
                <DiRedis
                  size={"2em"}
                  color={isDarkMode ? "#DC382D" : "#A41E11"} // Darker shade for light mode, lighter for dark mode
                />
              </AddInfoModal>,
            ]}
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="Website Template"
            title="Advanced Java Lucene-Based Search Engine with Custom Ranking Algorithms"
            summary={
              "This project involves building a sophisticated search engine using Java and the Lucene library, with a focus on object-oriented design and custom ranking algorithms. The search engine parses and indexes documents, implements multiple ranking strategies including TF-IDF and relevance feedback, and introduces a novel optimized TF-IDF algorithm that enhances search accuracy by weighting query terms based on their relevance."
            }
            // img={NFTSpaceProjectImage}
            link="https://github.com/tanujtinish/SearchEngie-CSE272-UCSC"
            github="https://github.com/tanujtinish/SearchEngie-CSE272-UCSC"
            teckStacks={[
              <AddInfoModal info="Java">
                <FaJava size={"2em"} />
              </AddInfoModal>,

              <AddInfoModal info="Apache Lucene">
                <ApacheLuceneLogoIcon />
              </AddInfoModal>,
            ]}
          />
        </div>
      </div>
    </>
  );
}
