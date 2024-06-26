import { motion } from "framer-motion";
import React, { useRef } from "react";
import useIsMobile from "./Hooks/useIsMobile";

const Skill = ({ name, x, y }) => {
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
      {name}
    </motion.div>
  );
};

const Skills = ({ styleObj }) => {
  const ref = useRef(null);

  const isMobile = useIsMobile();

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
            <Skill name="Cassandra" x="-15vw" y="-35vw" />

            <Skill name="GraphQL" x="30vw" y="-19.5vw" />

            <Skill name="Spring Boot" x="-30vw" y="-19.5vw" />

            <Skill name="Kubernetes/ECS" x="0.5vw" y="-12vw" />

            <Skill name="AWS" x="38vw" y="0vw" />
            <Skill name="Rest APIs" x="-38vw" y="0vw" />

            <Skill name="Dockers" x="0.5vw" y="12vw" />

            <Skill name="MongoDB" x="-30vw" y="19.5vw" />

            <Skill name="Postgres" x="30vw" y="19.5vw" />

            <Skill name="Redis" x="-15vw" y="35vw" />
            <Skill name="Kafka" x="15vw" y="35vw" />

            <Skill name="Node JS" x="20vw" y="55vw" />
            <Skill name="Distributed Systems" x="-20vw" y="55vw" />
          </>
        ) : (
          <>
            <Skill name="Rest APIs" x="-20vw" y="2vw" />
            <Skill name="AWS" x="16vw" y="-2vw" />
            <Skill name="GraphQL" x="-5vw" y="-10vw" />
            <Skill name="Kubernetes/ECS" x="20vw" y="6vw" />

            <Skill name="Dockers" x="35vw" y="8vw" />

            <Skill name="Node JS" x="0vw" y="12vw" />
            <Skill name="Spring Boot" x="-20vw" y="-15vw" />
            <Skill name="Design Patterns" x="10vw" y="-9vw" />
            <Skill name="DSA" x="-35vw" y="-5vw" />
            <Skill name="Redis" x="32vw" y="-5vw" />
            <Skill name="MultiThreading" x="0vw" y="-20vw" />
            <Skill name="MongoDB" x="-25vw" y="18vw" />
            <Skill name="Postgres" x="20vw" y="-15vw" />

            <Skill name="Kafka" x="28vw" y="18vw" />

            <Skill name="Distributed Systems" x="0vw" y="21vw" />
            <Skill name="Cassandra" x="-35vw" y="6vw" />
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
            <Skill name="Airflow" x="20vw" y="-55vw" />

            <Skill name="Spark" x="15vw" y="-35vw" />
            <Skill name="Hadoop" x="-15vw" y="-35vw" />

            <Skill name="Transformers" x="30vw" y="-19.5vw" />
            <Skill name="Pinecone" x="-30vw" y="-19.5vw" />

            <Skill name="ETL" x="38vw" y="0vw" />
            <Skill name="Hive" x="-38vw" y="0vw" />

            <Skill name="Kafka" x="-30vw" y="19.5vw" />

            <Skill name="LLM Fine Tuning" x="30vw" y="19.5vw" />

            <Skill name="Deep Learning Fundamentals" x="-0vw" y="35vw" />

            <Skill name="Presto" x="20vw" y="55vw" />
            <Skill name="RAG Systems" x="-20vw" y="55vw" />
          </>
        ) : (
          <>
            <Skill name="AWS" x="-20vw" y="2vw" />
            <Skill name="LangChain" x="16vw" y="-2vw" />
            <Skill name="Airflow" x="-5vw" y="-10vw" />
            <Skill name="Spark" x="20vw" y="6vw" />
            <Skill name="Hadoop" x="0vw" y="12vw" />
            <Skill name="ETL" x="-20vw" y="-15vw" />
            <Skill name="Hive" x="15vw" y="-12vw" />
            <Skill name="Presto" x="-35vw" y="-5vw" />
            <Skill name="Transformers" x="32vw" y="-5vw" />
            <Skill name="Fine Tuning LLM's" x="0vw" y="-20vw" />
            <Skill name="RAG Systems" x="-25vw" y="18vw" />
            <Skill name="Kafka" x="28vw" y="18vw" />
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
              <Skill name="HTML" x="-28vw" y="2vw" />
              <Skill name="CSS" x="-16vw" y="-16vw" />
              <Skill name="JavaScript" x="22vw" y="12vw" />
              <Skill name="ReactJS" x="-10vw" y="18vw" />
              <Skill name="NextJS" x="10vw" y="-20vw" />
              <Skill name="Tawilwind CSS" x="30vw" y="-6vw" />
            </>
          ) : (
            <>
              <Skill name="HTML" x="-14vw" y="1vw" />
              <Skill name="CSS" x="-8vw" y="-8vw" />
              <Skill name="JavaScript" x="11vw" y="6vw" />
              <Skill name="ReactJS" x="-5vw" y="9vw" />
              <Skill name="NextJS" x="5vw" y="-10vw" />
              <Skill name="Tawilwind CSS" x="15vw" y="-3vw" />
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
              <Skill name="Ethereum" x="-28vw" y="2vw" />
              <Skill name="EVM" x="-16vw" y="-16vw" />
              <Skill name="Geth Nodes" x="22vw" y="12vw" />
              <Skill name="Solidity" x="-10vw" y="18vw" />
              <Skill name="IPFS" x="10vw" y="-20vw" />
              <Skill name="Consensus Algorithms" x="30vw" y="-6vw" />
            </>
          ) : (
            <>
              <Skill name="Ethereum" x="-14vw" y="1vw" />
              <Skill name="EVM" x="-8vw" y="-8vw" />
              <Skill name="Geth Nodes" x="11vw" y="6vw" />
              <Skill name="Solidity" x="-5vw" y="9vw" />
              <Skill name="IPFS" x="5vw" y="-10vw" />
              <Skill name="Consensus Algorithms" x="15vw" y="-3vw" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
