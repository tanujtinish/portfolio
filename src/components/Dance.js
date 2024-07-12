import ScrollableContainerHorizontal from "@/components/common/ScrollableContainerHorizontal";
import React from "react";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

export default function Dance({ styleObj }) {
  const [mode, setMode] = useThemeSwitch();


  let styleObjVid = {
    height: "calc(var(--base-font-size) * 7)",
    width: "calc(var(--base-font-size) * 14)",
  }

  return (
    <div
      style={{
        marginTop: "calc(var(--base-font-size) * 3)",
        marginBottom: "calc(var(--base-font-size) * 3)",
        ...styleObj,
      }}
    >
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        Dance Videos
      </h2>
      <ScrollableContainerHorizontal
        styleObj={{
          width: "96%",
          marginLeft: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",

            overflowX: "auto",
            width: "100%",

            gap: "2%",
          }}
        >
          {" "}
          <iframe
            title="video1"
            src="https://www.youtube.com/embed/l-FmXeV8AbQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={...styleObjVid}
          ></iframe>
          <iframe
            title="video1"
            src="https://www.youtube.com/embed/53SlnMsm8Lo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={...styleObjVid}
          ></iframe>
          <iframe
            title="video1"
            src="https://www.youtube.com/embed/cOVje7AtrhY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={...styleObjVid}
          ></iframe>
          <iframe
            title="video1"
            src="https://www.youtube.com/embed/ots79_x2U2s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={...styleObjVid}
          ></iframe>
        </div>
      </ScrollableContainerHorizontal>
    </div>
  );
}
