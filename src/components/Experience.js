import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  techStack,
  teamDetails,
  role,
  roleDetails,
}) => {
  const ref = useRef(null);

  const renderRole = ({ roleDetails }) => {
    if (Array.isArray(roleDetails)) {
      return (
        <ul className="list-disc pl-5">
          {roleDetails.map((item, index) => (
            <li key={index} className="w-full ">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <></>;
  };

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold"
          style={{ fontSize: "calc(var(--base-font-size) * (23 / 32))" }}
        >
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize text-dark/75 dark:text-light/50"
          style={{ fontSize: "calc(var(--base-font-size) * (14 / 32))" }}
        >
          {time} | {address}
        </span>
        <div
          className="capitalize text-dark/75 dark:text-light/50"
          style={{
            marginTop: "calc(var(--base-font-size) * (3 / 32))",
            fontSize: "calc(var(--base-font-size) * (14 / 32))",
          }}
        >
          {techStack}
        </div>
        <p
          className="w-full "
          style={{
            marginTop: "calc(var(--base-font-size) * (5 / 32))",
            fontSize: "calc(var(--base-font-size) * (14 / 32))",
          }}
        >
          {" "}
          {teamDetails}
        </p>
        <p
          className="w-full "
          style={{
            marginTop: "calc(var(--base-font-size) * (10 / 32))",
            fontSize: "calc(var(--base-font-size) * (14 / 32))",
          }}
        >
          {" "}
          {role}
        </p>
        <p
          className="w-full "
          style={{
            marginTop: "calc(var(--base-font-size) * (10 / 32))",
            fontSize: "calc(var(--base-font-size) * (14 / 32))",
          }}
        >
          {" "}
          {renderRole({ roleDetails })}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = ({ styleObj }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div style={{ marginTop: "calc(var(--base-font-size) * 5)", ...styleObj }}>
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founding Software Developer"
            company="Metajungle LLC"
            companyLink="https://www.metajungle.io/"
            time="2023-Present"
            address="Springfiled, MO"
            techStack={
              "Next JS, Node JS, Web3.JS, Solidity, Hadoop, MongoDB, Cassandra, Airflow, AWS ECS, Elastic Search, Jenkins"
            }
            teamDetails="Worked in a team of seven engineers responsible for developing a groundbreaking one-stop portal where people can interact with their NFTs by aggregating data from various marketplaces, blockchains, and the Internet."
            role="As the team lead and founding software engineer, I have:"
            roleDetails={[
              "Designed storage layer for efficient storage and querying of 17 million blockchain transaction ",
              "Built a system for aggregating NFT data from blockchains and the internet at the scale of million operations a day",
              "Lead the backend development for http and websocket based API's using Next JS, Node JS, Web3.JS, and Solidity, among other technologies",
            ]}
          />

          <Details
            position="Intern"
            company="Meta (Facebook)"
            companyLink="https://facebook.com"
            time="Summer 2022"
            address="Menlo Park, CA."
            techStack={
              "React JS, XHP, GraphQL, XControllers, Hack PHP, MySQL, Scuba, Presto, ODS(Time series), Data Swarm"
            }
            teamDetails="Worked in the FB Business Growth team responsible for helping businesses grow their presence on the Facebook platform by facilitating the transition to Profile+."
            role="As a full stack developer intern, I:"
            roleDetails={[
              "Developed two end-to-end applications using React JS and Hack PHP to support the Profile to Profile+ transition on the Facebook app.",
              "Build data pipelines using the Data Swarm framework to create smaller aggregated tables to reduce GraphQL response time.",
            ]}
          />

          <Details
            position="Senior Software Engineer"
            company="Airtel X Labs"
            companyLink="https://www.airtel.in/"
            time="2020-2021"
            address="Gurgaon, India."
            techStack={
              "Java, Java Spring Boot, Kafka, Postgres, Drool, Maven, and Gradle"
            }
            teamDetails="Worked in the FTTH (Fiber To The Home) team responsible for building tools to track the development and deployment of FTTH optic fibers across India."
            role="I collaborated with a cross-functional team of 10 to design an end-to-end backend system. My contributions included."
            roleDetails={[
              "Led development and maintenance of FTTH(Fiber To The Home) project spanning three microservices using Java Spring Boot.",
              "Introduced Kafka-based microservice orchestration to streamline communication between microservices.",
            ]}
          />

          <Details
            position="Software Developer"
            company="OYO Group"
            companyLink="https://www.oyorooms.com"
            time="2019-2020"
            address="Gurgaon, India."
            techStack={
              "Java, Scala, Spark, Kafka, Python, Presto, Hive, AWS S3, Hadoop, and Airflow"
            }
            teamDetails="Worked in the Data Platform team responsible for managing the Hive-based data lake for the entire organization."
            role="As the owner of the Hive-based data lake, I developed and maintained end-to-end big data pipelines, both batch and real-time, to synchronize data from various microservices into the data lake for analysis."
            roleDetails={[
              "Optimized data lake UPSERT efficiency using Apache Hudi and AWS S3-based Bloom Filters for reduced SLA.",
              "Developed APIs and wrappers in Java Spring Boot enabling seamless data migration between sources for developers.",
              "Migrated Kafka and Airflow clusters to Kubernetes to optimize AWS resource use by 20% and cost by $40 a day.",
            ]}
          />

          <Details
            position="Frontend Developer intern"
            company="HDFC Life"
            companyLink="https://www.hdfclife.com/"
            time="Jan 2019- June 2019"
            address="Mumbai, India."
            techStack={"React JS, Node JS, AWS"}
            teamDetails="Worked in the ADCT team, a new tech team at HDFC Life, responsible for building technology solutions to streamline the life insurance process."
            role="Developed user-friendly interfaces in React JS for life insurance applications to enhance the user experience and streamline the insurance process."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
