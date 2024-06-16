import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import Experience from "../components/Experience";

const ExperiencePage = () => {
  const ref = useRef(null);
  return (
    <Experience
      styleObj={{ marginTop: "calc(var(--base-font-size) * (32 / 32))" }}
    />
  );
};

export default ExperiencePage;
