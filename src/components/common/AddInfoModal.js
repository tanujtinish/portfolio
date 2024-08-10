import React, { useState } from "react";

export default function AddInfoModal({
  children,
  info,
  renderDirection,
  styleObj,
  styleObjModal,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoIconHover = () => {
    setIsModalOpen(true);
  };
  const handleCloseInfoModal = () => {
    setIsModalOpen(false);
  };

  let position =
    renderDirection === "bottom-left"
      ? {
          top: "calc(1vw)",
        }
      : renderDirection === "up-left"
      ? {
          bottom: "calc(1vw)",
          right: "0",
        }
      : renderDirection === "bottom-left"
      ? {
          right: "0",
        }
      : {
          bottom: "calc(var(--base-font-size-item-page)*2)",
        };

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      <span
        onMouseEnter={(e) => {
          e.preventDefault();
          handleInfoIconHover(true);
        }}
        onMouseLeave={() => handleCloseInfoModal(true)}
        style={{ ...styleObj }}
      >
        {children}
      </span>
      {isModalOpen && (
        <pre
          className="info-text-modal-container text-white dark:text-black bg-dark dark:bg-light"
          style={{
            lineHeight: "2em",
            textAlign: "left",
            fontWeight: "bold",
            ...position,
            zIndex: "99999999999999999",
            ...styleObjModal,
          }}
        >
          {info || "This is a test modal"}
        </pre>
      )}
    </div>
  );
}
