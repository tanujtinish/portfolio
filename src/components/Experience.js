import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  teamDetails,
  role,
}) => {
  const ref = useRef(null);
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p
          className="font-medium w-full md:text-sm"
          style={{ marginTop: "calc(var(--base-font-size) * (10 / 32))" }}
        >
          {" "}
          {teamDetails}
        </p>
        <p
          className="font-medium w-full md:text-sm"
          style={{ marginTop: "calc(var(--base-font-size) * (10 / 32))" }}
        >
          {" "}
          {role}
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
    <div className="my-64" style={{ ...styleObj }}>
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
            teamDetails="Worked in a team of seven engineers responsible for developing a groundbreaking one-stop portal where people can interact with their NFTs by aggregating data from various marketplaces, blockchains, and the Internet."
            role="As the team lead and founding software engineer, I led the backend development using Next JS, Node JS, Web3.JS, and Solidity, among other technologies."
          />

          <Details
            position="Intern"
            company="Meta (Facebook)"
            companyLink="https://facebook.com"
            time="Summer 2022"
            address="Menlo Park, CA."
            teamDetails="Worked in the FB Business Growth team responsible for helping businesses grow their presence on the Facebook platform by facilitating the transition to Profile+."
            role="As a full stack developer intern, I developed two end-to-end applications using React JS and Hack PHP to support the Profile to Profile+ transition on the Facebook app. My contributions were crucial in helping notification owners transfer their notifications to the new Profile+ page, enhancing the integration of profiles and pages."
          />

          <Details
            position="Senior Software Engineer"
            company="Airtel X Labs"
            companyLink="https://www.airtel.in/"
            time="2020-2021"
            address="Gurgaon, India."
            work="Led development and maintenance of FTTH(Fiber To The Home) project spanning three microservices. Collaborated with a cross-functional team of 10 to design an end-to-end backend system."
          />

          <Details
            position="Software Developer"
            company="OYO Group"
            companyLink="https://www.oyorooms.com"
            time="2019-2020"
            address="Gurgaon, India."
            work="Member of ​Data Platform ​team - Owner of Hive-based data lake for the entire organization."
          />

          <Details
            position="Frontend Developer intern"
            company="HDFC Life"
            companyLink="https://www.hdfclife.com/"
            time="Jan 2019- June 2019"
            address="Mumbai, India."
            work="Designed and developed a highly responsive HR portal using React JS and Node JS."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
