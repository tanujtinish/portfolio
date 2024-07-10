import React, { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PropTypes from "prop-types";

const ScrollableContainerHorizontal = ({ children, styleObj }) => {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const scrollContainerBy = (offset) => {
    if (containerRef.current.children[0]) {
      containerRef.current.children[0].scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (containerRef.current) {
      setIsScrolled(containerRef.current.children[0].scrollLeft > 20);
      setIsScrolledToEnd(
        containerRef.current.children[0].scrollLeft +
          containerRef.current.children[0].clientWidth >=
          containerRef.current.children[0].scrollWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current.children[0];
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize the button visibility on mount
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef.current]);

  return (
    <div className="scrollable-wrapper" style={{ ...styleObj }}>
      {isScrolled && (
        <button
          onClick={() => scrollContainerBy(-1000)}
          className="scroll-button left"
        >
          <SlArrowLeft
            size="2vw"
            style={{
              minWidth: "3vw",
              marginRight: "1vw",
            }}
          />
        </button>
      )}
      <div className="scrollable-container" ref={containerRef}>
        {children}
      </div>
      {!isScrolledToEnd && (
        <button
          onClick={() => scrollContainerBy(1000)}
          className="scroll-button right"
        >
          <SlArrowRight
            size="2vw"
            style={{
              minWidth: "3vw",
              marginLeft: "1vw",
            }}
          />
        </button>
      )}
    </div>
  );
};

ScrollableContainerHorizontal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollableContainerHorizontal;
