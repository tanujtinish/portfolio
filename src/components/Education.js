import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({
  type,
  time,
  place,
  info,
  grade,
  mainProjectDetails,
  mainProjectHeadline,
  mainProjectContributions,
  activities,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold"
          style={{ fontSize: "calc(var(--base-font-size) * (23 / 32))" }}
        >
          {type}
        </h3>
        <span
          className="capitalize text-dark/75 dark:text-light/50"
          style={{ fontSize: "calc(var(--base-font-size) * (14 / 32))" }}
        >
          {time} | {place}
        </span>
        {grade && (
          <div
            className="capitalize text-dark/75 dark:text-light/50"
            style={{
              fontWeight: "bold",
              fontSize: "calc(var(--base-font-size) * (14 / 32))",
            }}
          >
            {grade}
          </div>
        )}
        <p
          className="w-full"
          style={{ fontSize: "calc(var(--base-font-size) * (14 / 32))" }}
        >
          {info}
        </p>
        {mainProjectHeadline && (
          <>
            <div
              className="w-full"
              style={{
                fontWeight: "700",
                fontSize: "calc(var(--base-font-size) * (23 / 32))",
                marginTop: "calc(var(--base-font-size) * (23 / 32))",
              }}
            >
              {mainProjectHeadline}
            </div>
            <div
              className="w-full"
              style={{
                fontSize: "calc(var(--base-font-size) * (14 / 32))",
                marginTop: "calc(var(--base-font-size) * (23 / 32))",
              }}
            >
              {mainProjectDetails}
            </div>

            <ul
              className="list-disc pl-5"
              style={{
                fontSize: "calc(var(--base-font-size) * (14 / 32))",
                marginTop: "calc(var(--base-font-size) * (8 / 32))",
              }}
            >
              {mainProjectContributions.map((item, index) => (
                <li
                  key={index}
                  className="w-full"
                  style={{
                    fontSize: "calc(var(--base-font-size) * (14 / 32))",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
        {activities && (
          <>
            {(activities || []).map((activity, index) => (
              <li key={index} className="w-full">
                <div
                  className="w-full"
                  style={{
                    fontWeight: "700",
                    fontSize: "calc(var(--base-font-size) * (23 / 32))",
                    marginTop: "calc(var(--base-font-size) * (23 / 32))",
                  }}
                >
                  {activity?.headline}
                </div>
                <div
                  className="w-full"
                  style={{
                    fontSize: "calc(var(--base-font-size) * (14 / 32))",
                    marginTop: "calc(var(--base-font-size) * (23 / 32))",
                  }}
                >
                  {activity?.info}
                </div>
              </li>
            ))}
          </>
        )}
      </motion.div>
    </li>
  );
};

const Education = ({ styleObj }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div
      style={{
        marginTop: "calc(var(--base-font-size) * 5)",
        ...styleObj,
      }}
    >
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Master's of Science In Comuter Science (Distributed Systems)"
            time="2021-2023"
            place="University of California, Santa Cruz"
            grade="4+/4 GPA"
            info="Relevant coursework included Distributed Systems, Design and Implementation of Databases, Deep Learning, and High-Performance Computing."
            mainProjectHeadline="Master's Project: Actor Graph Library (AGL)"
            mainProjectDetails="My master's project focused on developing the Actor Graph Library (AGL) kernel, a tool designed to facilitate distributed graph construction, generation, and processing, leveraging the HClib Actor framework built on top of OpenMP to address the limitations of PGAS applications."
            mainProjectContributions={[
              "Designed and implemented an actor-based graph library kernel for distributed graph processing using the HClib library, written in OpenMP and C++.",
              "Developed various graph generators, including random and RMAT generators, to support diverse graph construction needs.",
              "Created several graph builders to reduce communication and improve locality, including Cyclic, Range, Snake, Rotation, and Snake with Rotation.",
              "Implemented distributed Breadth-First Search (BFS) algorithms on top of AGL graph builder, optimizing graph traversal efficiency.",
            ]}
          />

          <Details
            type="Bachelor of Engineering - BE"
            time="2015-2019"
            place="Birla Institute of Technology and Science, Pilani"
            info="Relevant coursework included Operating Systems, Data structures and Algorithms, Information Retrieval, Datbase Management Systems"
            activities={[
              {
                headline: "Dance Club Secretary (2017 - 2018)",
                info: "Spearheaded a 23 member team to clinch 3 podium finishes at Inter College Dance Competitions across India. Directed & choreographed performance to help the team reach HHI India finals for the first time in the history of BPHC.",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
