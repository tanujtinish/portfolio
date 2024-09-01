import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import profile from "../../public/images/profile/Grad_photo_compressed.jpg";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import ScrollableContainerHorizontal from "@/components/common/ScrollableContainerHorizontal";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <AnimatedText
        text="Passion Fuels Purpose!"
        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />

      <div
        className="grid w-full grid-cols-8 gap-16 sm:gap-8"
        style={{ fontSize: "1vw" }}
      >
        <div
          className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
    md:col-span-8"
        >
          <div
            className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75"
            style={{ fontSize: "calc(var(--base-font-size) * (32 / 32))" }}
          >
            BIOGRAPHY
          </div>
          <p style={{ fontSize: "calc(var(--base-font-size) * (16 / 32))" }}>
            Hi, I&apos;m <strong>Tanuj Gupta</strong>, a software engineer
            specializing in building large-scale distributed systems. As a
            Founding Software Engineer at Metajungle since 2023, I have been
            leading a backend team to develop a one-stop NFT interaction portal.
            <br />
            <strong>Prototype: </strong>
            <a
              href="http://www.nftspaceship.org/"
              style={{ textDecoration: "underline", color: "#58e6d9" }}
            >
              http://www.nftspaceship.org/
            </a>
          </p>
          <p
            className="my-4"
            style={{ fontSize: "calc(var(--base-font-size) * (16 / 32))" }}
          >
            This innovative project involves aggregating data from various
            marketplaces and blockchains to enhance user experiences in the NFT
            space. We are designing the database and compute layers that can
            handle data at the scale of millions of transactions and billions of
            log data on the Ethereum blockchain.
          </p>
          <p
            className="my-4"
            style={{ fontSize: "calc(var(--base-font-size) * (16 / 32))" }}
          >
            I possess a strong command of full-stack development, with various
            frontend and backend frameworks, particularly with the MERN stack.
            My contributions span both designing engaging single-page
            applications using frameworks like React.js, and Next.js and
            architecting complex backend systems using Node.js, GraphQL, GoLang,
            Spring Boot, AWS, etc. My full-stack journey includes significant
            roles at renowned companies like Meta, Airtel, OYO, and HDFC Life,
            where I honed my skills and contributed to a variety of challenging
            projects.
          </p>
          <p style={{ fontSize: "calc(var(--base-font-size) * (16 / 32))" }}>
            In general, My passion lies in designing large-scale, complex
            systems that are both fast and fault-tolerant. A graduate of{" "}
            <strong>BITS Pilani (India)</strong>, and{" "}
            <strong>UCSC (California)</strong> with a 4+/4 GPA, I possess a keen
            understanding of modern distributed data structures, algorithms, and
            multi-threading frameworks, including OpenMP, MPI, Cuda, and C++
            POSIX Threads. This knowledge provides me with valuable low-level
            insights into the systems underpinning software, guiding my
            decisions on the most effective databases or systems to employ.
          </p>
        </div>
        <div
          className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
    bg-light p-8 dark:border-light dark:bg-dark
    xl:col-span-4 md:col-span-8 md:order-1
    "
        >
          <div
            className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
        bg-dark
dark:bg-light  "
          />
          <Image
            className="h-auto w-full rounded-2xl"
            src={profile}
            alt="Tanuj Gupta"
            sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
            priority
          />
        </div>
        <div
          className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
    xl:items-center md:order-3"
        >
          {/* <div className="flex flex-col items-end justify-center xl:items-center">
        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
          <AnimatedNumberFramerMotion value={40} />+
        </span>
        <h2
          className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
        xl:text-center md:text-lg sm:text-base xs:text-sm"
        >
          satisfied clients
        </h2>
      </div> */}

          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumberFramerMotion value={20} />+
            </span>
            <h2
              className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
        xl:text-center md:text-lg sm:text-base xs:text-sm"
            >
              projects completed
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center xl:items-center">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumberFramerMotion value={4} />+
            </span>
            <h2
              className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
        xl:text-center md:text-lg sm:text-base xs:text-sm"
            >
              Years of experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
