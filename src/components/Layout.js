import React from "react";

const Layout = ({ children, className = "", styleObj }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 ${className}`}
      style={{
        ...styleObj,
        marginTop: "calc(var(--base-font-size) * (24 / 32)*4)",
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
