import { motion } from "framer-motion";
import React, { useRef } from "react";
import AddInfoModal from "./common/AddInfoModal";
import useIsMobile from "./Hooks/useIsMobile";

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
import { DiRedis } from "react-icons/di";

const Skill = ({ name, x, y, children }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
      style={{ maxWidth: "10em" }}
    >
      <>{children ? children : name}</>
    </motion.div>
  );
};

const Skills = ({ styleObj }) => {
  const ref = useRef(null);

  const isMobile = useIsMobile();

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
      <h2
        className="font-bold text-8xl  w-full text-center"
        style={{
          marginTop: "calc(var(--base-font-size) * 5)",
          ...styleObj,
        }}
      >
        Skills
      </h2>

      <div
        ref={ref}
        className="w-full relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
       rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      "
        style={{
          marginTop: "calc(var(--base-font-size) * 3)",
          height: isMobile ? "90vh" : "100vh",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          style={{ maxWidth: "10em" }}
        >
          Backend
        </motion.div>

        {isMobile ? (
          <>
            <Skill name="Design Patterns" x="-20vw" y="-55vw" />
            <Skill name="MultiThreadings" x="20vw" y="-55vw" />

            <Skill name="DSA" x="15vw" y="-35vw" />
            <Skill name="Cassandra" x="-15vw" y="-35vw">
              <AddInfoModal info="Apache Cassandra">
                <SiApachecassandra size={"3em"} color="#1287B1" />
              </AddInfoModal>
            </Skill>

            <Skill name="GraphQL" x="30vw" y="-19.5vw">
              <AddInfoModal info="GraphQL">
                <GrGraphQl size={"3em"} color="#E10098" />
              </AddInfoModal>
            </Skill>

            <Skill name="Spring Boot" x="-30vw" y="-19.5vw">
              <AddInfoModal info="Spring Boot">
                <BiLogoSpringBoot size={"3em"} color="#6DB33F" />
              </AddInfoModal>
            </Skill>

            <Skill name="Kubernetes/ECS" x="0.5vw" y="-12vw">
              <AddInfoModal info="Kubernetes">
                <AiOutlineKubernetes size={"3em"} color="#326CE5" />
              </AddInfoModal>
            </Skill>

            <Skill name="AWS" x="38vw" y="0vw">
              <AddInfoModal info="AWS">
                <FaAws size={"3em"} color="#FF9900" />
              </AddInfoModal>
            </Skill>
            <Skill name="Rest APIs" x="-38vw" y="0vw" />

            <Skill name="Dockers" x="0.5vw" y="12vw">
              <AddInfoModal info="Docker">
                <FaDocker size={"3em"} color="#2496ED" />
              </AddInfoModal>
            </Skill>

            <Skill name="MongoDB" x="-30vw" y="19.5vw">
              <AddInfoModal info="MongoDB">
                <SiMongodb size={"3em"} color="#47A248" />
              </AddInfoModal>
            </Skill>

            <Skill name="Postgres" x="30vw" y="19.5vw">
              <AddInfoModal info="PostgreSQL">
                <BiLogoPostgresql size={"3em"} color="#336791" />
              </AddInfoModal>
            </Skill>

            <Skill name="Redis" x="-15vw" y="35vw">
              <AddInfoModal info="Redis">
                <DiRedis size={"3em"} color="#DC382D" />
              </AddInfoModal>
            </Skill>
            <Skill name="Kafka" x="15vw" y="35vw">
              <AddInfoModal info="Apache Kafka">
                <SiApachekafka
                  size={"3em"}
                  color={isDarkMode ? "#ffffff" : "#231F20"}
                />
              </AddInfoModal>
            </Skill>

            <Skill name="Node JS" x="20vw" y="55vw">
              <AddInfoModal info="Node.js">
                <FaNodeJs size={"3em"} color="#68A063" />
              </AddInfoModal>
            </Skill>

            <Skill name="Distributed Systems" x="-20vw" y="55vw" />
          </>
        ) : (
          <>
            <Skill name="Rest APIs" x="-20vw" y="2vw" />
            <Skill name="AWS" x="16vw" y="-2vw">
              <AddInfoModal info="AWS">
                <FaAws size={"3em"} color="#FF9900" />
              </AddInfoModal>
            </Skill>
            <Skill name="GraphQL" x="-5vw" y="-10vw">
              <AddInfoModal info="GraphQL">
                <GrGraphQl size={"3em"} color="#E10098" />
              </AddInfoModal>
            </Skill>
            <Skill name="Kubernetes/ECS" x="20vw" y="6vw">
              <AddInfoModal info="Kubernetes">
                <AiOutlineKubernetes size={"3em"} color="#326CE5" />
              </AddInfoModal>
            </Skill>
            <Skill name="Dockers" x="35vw" y="8vw">
              <AddInfoModal info="Docker">
                <FaDocker size={"3em"} color="#2496ED" />
              </AddInfoModal>
            </Skill>
            <Skill name="Node JS" x="0vw" y="12vw">
              <AddInfoModal info="Node.js">
                <FaNodeJs size={"3em"} color="#68A063" />
              </AddInfoModal>
            </Skill>
            <Skill name="Spring Boot" x="-20vw" y="-15vw">
              <AddInfoModal info="Spring Boot">
                <BiLogoSpringBoot size={"3em"} color="#6DB33F" />
              </AddInfoModal>
            </Skill>
            <Skill name="Design Patterns" x="10vw" y="-9vw" />
            <Skill name="DSA" x="-35vw" y="-5vw" />
            <Skill name="Redis" x="32vw" y="-5vw">
              <AddInfoModal info="Redis">
                <DiRedis size={"3em"} color="#DC382D" />
              </AddInfoModal>
            </Skill>
            <Skill name="MultiThreading" x="0vw" y="-20vw" />
            <Skill name="MongoDB" x="-25vw" y="18vw">
              <AddInfoModal info="MongoDB">
                <SiMongodb size={"3em"} color="#47A248" />
              </AddInfoModal>
            </Skill>
            <Skill name="Postgres" x="20vw" y="-15vw">
              <AddInfoModal info="PostgreSQL">
                <BiLogoPostgresql size={"3em"} color="#336791" />
              </AddInfoModal>
            </Skill>
            <Skill name="Kafka" x="28vw" y="18vw">
              <AddInfoModal info="Apache Kafka">
                <SiApachekafka
                  size={"3em"}
                  color={isDarkMode ? "#231F20" : "#ffffff"}
                />
              </AddInfoModal>
            </Skill>
            <Skill name="Distributed Systems" x="0vw" y="21vw" />
            <Skill name="Cassandra" x="-35vw" y="6vw">
              <AddInfoModal info="Apache Cassandra">
                <SiApachecassandra size={"3em"} color="#1287B1" />
              </AddInfoModal>
            </Skill>
          </>
        )}
      </div>

      <div
        ref={ref}
        className="w-full relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
       rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm 
      "
        style={{
          marginTop: "calc(var(--base-font-size) * 3)",
          height: isMobile ? "80vh" : "100vh",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          style={{ maxWidth: "10em" }}
        >
          {isMobile ? "DataEng/MLOps" : "Data Engineering / MLOps"}
        </motion.div>

        {isMobile ? (
          <>
            <Skill name="LangChain" x="-20vw" y="-55vw" />

            <Skill name="Airflow" x="20vw" y="-55vw">
              <AddInfoModal info="Apache Airflow">
                <SiApacheairflow size={"3em"} color="#017CEE" />
              </AddInfoModal>
            </Skill>

            <Skill name="Spark" x="15vw" y="-35vw">
              <AddInfoModal info="Apache Spark">
                <SiApachespark size={"3em"} color="#E25A1C" />
              </AddInfoModal>
            </Skill>

            <Skill name="Hadoop" x="-15vw" y="-35vw">
              <AddInfoModal info="Apache Hadoop">
                <GrHadoop size={"3em"} color="#66CCFF" />
              </AddInfoModal>
            </Skill>

            <Skill name="Transformers" x="30vw" y="-19.5vw" />

            <Skill name="Pinecone" x="-30vw" y="-19.5vw" />

            <Skill name="ETL" x="38vw" y="0vw" />

            <Skill name="Hive" x="-38vw" y="0vw">
              <AddInfoModal info="Apache Hive">
                <SiApachehive size={"3em"} color="#FF9900" />
              </AddInfoModal>
            </Skill>

            <Skill name="Kafka" x="-30vw" y="19.5vw">
              <AddInfoModal info="Apache Kafka">
                <SiApachekafka
                  size={"3em"}
                  color={isDarkMode ? "#ffffff" : "#231F20"}
                />
              </AddInfoModal>
            </Skill>

            <Skill name="LLM Fine Tuning" x="30vw" y="19.5vw" />

            <Skill name="Deep Learning Fundamentals" x="0vw" y="35vw" />

            <Skill name="Presto" x="20vw" y="55vw">
              <AddInfoModal info="Presto">
                <SiPresto size={"3em"} color="#4695EB" />
              </AddInfoModal>
            </Skill>

            <Skill name="RAG Systems" x="-20vw" y="55vw" />
          </>
        ) : (
          <>
            <Skill name="AWS" x="-20vw" y="2vw">
              <AddInfoModal info="AWS">
                <FaAws size={"3em"} color="#FF9900" />
              </AddInfoModal>
            </Skill>

            <Skill name="LangChain" x="16vw" y="-2vw" />

            <Skill name="Airflow" x="-5vw" y="-10vw">
              <AddInfoModal info="Apache Airflow">
                <SiApacheairflow size={"3em"} color="#017CEE" />
              </AddInfoModal>
            </Skill>

            <Skill name="Spark" x="20vw" y="6vw">
              <AddInfoModal info="Apache Spark">
                <SiApachespark size={"3em"} color="#E25A1C" />
              </AddInfoModal>
            </Skill>

            <Skill name="Hadoop" x="0vw" y="12vw">
              <AddInfoModal info="Apache Hadoop">
                <GrHadoop size={"3em"} color="#66CCFF" />
              </AddInfoModal>
            </Skill>

            <Skill name="ETL" x="-20vw" y="-15vw" />

            <Skill name="Hive" x="15vw" y="-12vw">
              <AddInfoModal info="Apache Hive">
                <SiApachehive size={"3em"} color="#FF9900" />
              </AddInfoModal>
            </Skill>

            <Skill name="Presto" x="-35vw" y="-5vw">
              <AddInfoModal info="Presto">
                <SiPresto size={"3em"} color="#4695EB" />
              </AddInfoModal>
            </Skill>

            <Skill name="Transformers" x="32vw" y="-5vw" />

            <Skill name="Fine Tuning LLM's" x="0vw" y="-20vw" />

            <Skill name="RAG Systems" x="-25vw" y="18vw" />

            <Skill name="Kafka" x="28vw" y="18vw">
              <AddInfoModal info="Apache Kafka">
                <SiApachekafka
                  size={"3em"}
                  color={isDarkMode ? "#231F20" : "#ffffff"}
                />
              </AddInfoModal>
            </Skill>

            <Skill name="Deep Learning Fundamentals" x="0vw" y="21vw" />

            <Skill name="Pinecone" x="-35vw" y="6vw" />
          </>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          marginTop: "calc(var(--base-font-size) * 3)",
        }}
      >
        <div
          ref={ref}
          className="h-[70vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
       rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[60vh] sm:h-[50vh] xs:h-[40vh] 
      "
          style={{ width: isMobile ? "100%" : "45%" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          >
            Frontend
          </motion.div>

          {isMobile ? (
            <>
              <Skill name="HTML" x="-28vw" y="2vw">
                <AddInfoModal info="HTML5">
                  <FaHtml5 size={"3em"} color="#E34F26" />
                </AddInfoModal>
              </Skill>

              <Skill name="CSS" x="-16vw" y="-16vw">
                <AddInfoModal info="CSS3">
                  <FaCss3Alt size={"3em"} color="#1572B6" />
                </AddInfoModal>
              </Skill>

              <Skill name="JavaScript" x="22vw" y="12vw">
                <AddInfoModal info="JavaScript">
                  <IoLogoJavascript size={"3em"} color="#F7DF1E" />
                </AddInfoModal>
              </Skill>

              <Skill name="ReactJS" x="-10vw" y="18vw">
                <AddInfoModal info="ReactJS">
                  <RiReactjsFill size={"3em"} color="#61DAFB" />
                </AddInfoModal>
              </Skill>

              <Skill name="NextJS" x="10vw" y="-20vw">
                <AddInfoModal info="NextJS">
                  <RiNextjsFill
                    size={"3em"}
                    color={isDarkMode ? "#ffffff" : "#000000"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="Tailwind CSS" x="30vw" y="-6vw">
                <AddInfoModal info="Tailwind CSS">
                  <RiTailwindCssFill size={"3em"} color="#38B2AC" />
                </AddInfoModal>
              </Skill>
            </>
          ) : (
            <>
              <Skill name="HTML" x="-14vw" y="1vw">
                <AddInfoModal info="HTML5">
                  <FaHtml5 size={"3em"} color="#E34F26" />
                </AddInfoModal>
              </Skill>

              <Skill name="CSS" x="-8vw" y="-8vw">
                <AddInfoModal info="CSS3">
                  <FaCss3Alt size={"3em"} color="#1572B6" />
                </AddInfoModal>
              </Skill>

              <Skill name="JavaScript" x="11vw" y="6vw">
                <AddInfoModal info="JavaScript">
                  <IoLogoJavascript size={"3em"} color="#F7DF1E" />
                </AddInfoModal>
              </Skill>

              <Skill name="ReactJS" x="-5vw" y="9vw">
                <AddInfoModal info="ReactJS">
                  <RiReactjsFill size={"3em"} color="#61DAFB" />
                </AddInfoModal>
              </Skill>

              <Skill name="NextJS" x="5vw" y="-10vw">
                <AddInfoModal info="NextJS">
                  <RiNextjsFill
                    size={"3em"}
                    color={isDarkMode ? "#000000" : "#ffffff"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="Tailwind CSS" x="15vw" y="-3vw">
                <AddInfoModal info="Tailwind CSS">
                  <RiTailwindCssFill size={"3em"} color="#38B2AC" />
                </AddInfoModal>
              </Skill>
            </>
          )}
        </div>
        <div
          ref={ref}
          className="h-[70vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
       rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[60vh] sm:h-[50vh] xs:h-[40vh] 
      "
          style={{ width: isMobile ? "100%" : "45%" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
          >
            Blockchain
          </motion.div>

          {isMobile ? (
            <>
              <Skill name="Ethereum" x="-28vw" y="2vw">
                <AddInfoModal info="Ethereum">
                  <FaEthereum
                    size={"3em"}
                    color={isDarkMode ? "white" : "#3C3C3D"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="EVM" x="-16vw" y="-16vw" />

              <Skill name="Geth Nodes" x="22vw" y="12vw" />

              <Skill name="Solidity" x="-10vw" y="18vw">
                <AddInfoModal info="Solidity">
                  <SiSolidity
                    size={"3em"}
                    color={isDarkMode ? "#ffffff" : "#000000"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="IPFS" x="10vw" y="-20vw">
                <AddInfoModal info="IPFS">
                  <SiIpfs size={"3em"} color="#65C2CB" />
                </AddInfoModal>
              </Skill>

              <Skill name="Consensus Algorithms" x="30vw" y="-6vw" />
            </>
          ) : (
            <>
              <Skill name="Ethereum" x="-14vw" y="1vw">
                <AddInfoModal info="Ethereum">
                  <FaEthereum
                    size={"3em"}
                    color={isDarkMode ? "#3C3C3D" : "white"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="EVM" x="-8vw" y="-8vw" />

              <Skill name="Geth Nodes" x="11vw" y="6vw" />

              <Skill name="Solidity" x="-5vw" y="9vw">
                <AddInfoModal info="Solidity">
                  <SiSolidity
                    size={"3em"}
                    color={isDarkMode ? "#000000" : "#ffffff"}
                  />
                </AddInfoModal>
              </Skill>

              <Skill name="IPFS" x="5vw" y="-10vw">
                <AddInfoModal info="IPFS">
                  <SiIpfs size={"3em"} color="#65C2CB" />
                </AddInfoModal>
              </Skill>

              <Skill name="Consensus Algorithms" x="15vw" y="-3vw" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
