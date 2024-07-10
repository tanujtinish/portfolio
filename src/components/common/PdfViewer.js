import React, { useEffect } from "react";

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div style={{ height: "750px", width: "100%" }}>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PdfViewer;
