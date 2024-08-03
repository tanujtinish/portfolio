import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/profile_pic_2.jpeg";

import TransitionEffect from "@/components/TransitionEffect";
import useIsMobile from "../components/Hooks/useIsMobile";
import Dance from "@/components/Dance";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>Tanuj Gupta's Portfolio</title>
        <meta
          name="description"
          content="Explore Tanuj Gupta's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex  items-center text-dark dark:text-light sm:items-start`}
        style={{ position: "relative" }}
      >
        <Layout
          styleObj={
            isMobile
              ? {
                  padding: "calc(var(--base-font-size) * (32 / 32))",
                }
              : {
                  padding: "calc(var(--base-font-size) * (16 / 32))",
                  paddingRight: "calc(var(--base-font-size) * (32 / 32))",
                }
          }
        >
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="Tanuj Gupta"
                // className="h-auto w-full"
                sizes="100vw"
                priority
                style={
                  !isMobile
                    ? {
                        padding: "calc(var(--base-font-size) * (32 / 32))",
                      }
                    : {
                        padding: "calc(var(--base-font-size) * (32 / 32))",
                      }
                }
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Building the Future with Distributed Systems and Cutting-Edge Web Solutions."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                styleObj={{
                  fontSize: "calc(var(--base-font-size) * (2.3 / 2))",
                  lineHeight: "calc(var(--base-font-size) * (3 / 2))",
                }}
              />
              <p
                className="my-4 text-base font-medium md:text-sm"
                style={{
                  fontSize: "calc(var(--base-font-size) * (1.3 / 2))",
                  lineHeight: "calc(var(--base-font-size) * (2.5 / 2))",
                }}
              >
                With a deep passion for crafting scalable distributed systems
                and dynamic web applications, I bring ideas to life through code
                and design. Explore my portfolio to see my expertise in building
                large-scale databases, innovative websites, and advanced LLM
                systems, showcasing my proficiency in full-stack development and
                modern technologies.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  // href="/resume"
                  href="/Tanuj Gupta - Resume.pdf"
                  className={`flex items-center rounded-lg border-2 border-solid bg-darkGlass2 p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-lightGlass2 dark:text-dark dark:hover:border-light dark:hover:bg-transparent dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  style={{
                    fontSize: "calc(var(--base-font-size) * (1.3 / 2))",
                    lineHeight: "calc(var(--base-font-size) * (2.5 / 2))",
                    padding:
                      "calc(var(--base-font-size) * (12 / 32)) calc(var(--base-font-size) * (36 / 32))",
                    backdropFilter:
                      "blur(calc(var(--base-font-size) * (24 / 32)))",
                    "-webkit-backdrop-filter":
                      "blur(calc(var(--base-font-size) * (24 / 32)))",
                  }}
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:tanuj.professional@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                  style={{
                    fontSize: "calc(var(--base-font-size) * (1.3 / 2))",
                    lineHeight: "calc(var(--base-font-size) * (2.5 / 2))",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div
          className="absolute inline-block w-24 md:hidden"
          style={{
            bottom: "calc(var(--base-font-size) * (2.5 / 2))",
            right: "0",
          }}
        >
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Tanuj Gupta"
          />
        </div>
      </article>
      <Dance styleObj={{ marginTop: "0" }} />
    </>
  );
}
