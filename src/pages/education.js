import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "../components/LiIcon";
import Education from "../components/Education";

const EducationPage = () => {
  const ref = useRef(null);
  return (
    <Education
      styleObj={{ marginTop: "calc(var(--base-font-size) * (32 / 32))" }}
    />
  );
};

export default EducationPage;
