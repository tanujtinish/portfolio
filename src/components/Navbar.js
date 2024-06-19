import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LeetcodeIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";
import { IoMenu } from "react-icons/io5";
import useIsMobile from "./Hooks/useIsMobile";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const filterSectionRef = useRef(null);
  const isMobile = useIsMobile();

  //useEffect for closing filter section on outside click
  useEffect(() => {
    const handleOutsideTap = (event) => {
      if (
        filterSectionRef.current &&
        !filterSectionRef.current.contains(event.target)
      ) {
        handleClick();
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener("touchstart", handleOutsideTap);
    }

    return () => {
      document.removeEventListener("touchstart", handleOutsideTap);
    };
  }, [isOpen]);

  return (
    <header
      className="w-full flex items-center justify-between font-medium z-10 dark:text-light
    lg:px-16 relative z-1 md:px-12 sm:px-8
    "
      style={{
        padding:
          "calc(var(--base-font-size) * (24 / 32)) calc(var(--base-font-size) * (24 / 32))",
      }}
    >
      <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
        style={{
          height: "calc(var(--base-font-size) * (36 / 32))",
          width: "calc(var(--base-font-size) * (36 / 32))",
        }}
      >
        <IoMenu size={"100%"} />
      </button>

      <div
        className="w-full flex justify-between items-center lg:hidden"
        style={{ fontSize: "calc(var(--base-font-size) * (1.5 / 2))" }}
      >
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About" />
          {/* <CustomLink className="mx-4" href="/projects" title="Projects" /> */}
          <CustomLink className="mx-4" href="/experience" title="Experience" />
          <CustomLink className="mx-4" href="/education" title="Education" />
          <CustomLink className="mx-4" href="/skills" title="Skills" />
          {/* <CustomLink className="ml-4" href="/articles" title="Articles" /> */}
        </nav>
        <nav
          className="flex items-center justify-center flex-wrap lg:mt-2
      "
          style={{ fontSize: "calc(var(--base-font-size) * (1.5 / 2))" }}
        >
          <motion.a
            target={"_blank"}
            className="mx-3"
            href="https://github.com/tanujtinish"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="mx-3"
            href="https://www.linkedin.com/in/tanuj-gupta-57b869168/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            target={"_blank"}
            className="mx-3"
            href="https://leetcode.com/u/tanuj_gupta/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my leetcode profile"
          >
            <LeetcodeIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className=" flex justify-between items-center flex-col -translate-x-1/2
      -translate-y-1/2
       bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md
      "
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            position: "fixed",
            top: "50vh",
            width: "80vw",
            left: "50vw",
            padding: "10vh 0",
            fontSize: "calc(var(--base-font-size) * 20/32)",
            gap: "calc(var(--base-font-size) * 20/32)",
          }}
          ref={filterSectionRef}
        >
          <nav
            className="flex items-center justify-center flex-col"
            style={{
              gap: "calc(var(--base-font-size) * 32/32)",
            }}
          >
            <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/"
              title="Home"
            />
            <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/about"
              title="About"
            />
            {/* <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              className="ml-4 lg:m-0 lg:my-2"
              href="/articles"
              title="Articles"
            /> */}
            <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/experience"
              title="Experience"
            />
            <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/education"
              title="Education"
            />
            <CustomMobileLink
              toggle={handleClick}
              className=""
              href="/skills"
              title="Skills"
            />
          </nav>
          <nav
            className="flex items-center justify-center  mt-2
      "
            style={{
              fontSize: "calc(var(--base-font-size) * 20/32)",
            }}
          >
            <motion.a
              target={"_blank"}
              className=" m-1 mr-3 sm:mx-1"
              href="https://github.com/tanujtinish"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my github profile"
              style={{
                fontSize: "calc(var(--base-font-size) * 40/32)",
              }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="m-1 mr-3 sm:mx-1"
              href="https://www.linkedin.com/in/tanuj-gupta-57b869168/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my linkedin profile"
              style={{
                fontSize: "calc(var(--base-font-size) * 40/32)",
              }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              target={"_blank"}
              className="m-1 mr-3 sm:mx-1"
              href="https://leetcode.com/u/tanuj_gupta/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Checkout my leetcode profile"
              style={{
                fontSize: "calc(var(--base-font-size) * 40/32)",
              }}
            >
              <LeetcodeIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
              aria-label="theme-switcher"
              style={{
                fontSize: "calc(var(--base-font-size) * 40/32)",
                width: "1em",
                height: "1em",
              }}
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default Navbar;
