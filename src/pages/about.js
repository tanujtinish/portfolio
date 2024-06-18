import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Grad_photo_compressed.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

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
      <Head>
        <title>Tanuj Gupta's Portfolio | About Page</title>
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
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m <strong>Tanuj Gupta</strong>, a software engineer
                specializing in building large-scale distributed systems. As a
                Founding Software Engineer at Metajungle since 2023, I have been
                leading a backend team to develop a one-stop NFT interaction
                portal. This innovative project involves aggregating data from
                various marketplaces and blockchains to enhance user experiences
                in the NFT space. We are designing the database and compute
                layers that can handle data at the scale of millions of
                transactions and billions of log data on the Ethereum
                blockchain.
              </p>
              <p className="my-4 font-medium">
                I possess a strong command of full-stack development,
                particularly with the MERN stack, leveraging React and Node.js.
                My experience extends to using Spring Boot for backend
                development. My contributions span both designing engaging
                single-page applications using React and architecting complex
                backend systems. My full-stack journey includes significant
                roles at renowned companies like Meta, Airtel, OYO, and HDFC
                Life, where I honed my skills and contributed to a variety of
                challenging projects.
              </p>
              <p className="font-medium">
                In general, My passion lies in designing large-scale, complex
                systems that are both fast and fault-tolerant. A graduate of
                UCSC with an exceptional 4+/4 GPA, I possess a keen
                understanding of modern distributed data structures, algorithms,
                and multi-threading frameworks, including OpenMP, MPI, Cuda, and
                C++ POSIX Threads. This knowledge provides me with valuable
                low-level insights into the systems underpinning software,
                guiding my decisions on the most effective databases or systems
                to employ.
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

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
