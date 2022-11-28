import { motion as m } from "framer-motion";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import resume from "./Assets/resume.pdf";
import Footer from "./Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl mx-5 lg:mx-auto pt-10">
        <div>
          <h1 className="text-5xl font-extrabold">Resumé.</h1>

          <div className="py-5 text-gray-500">
            <span>
              Reach out to me via my contact page. View or download the resume.
            </span>
          </div>

          <div className="">
            <Document
              className="w-full flex justify-center scale-75 md:scale-100 md:translate-y-0 md:translate-x-0"
              file={resume}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                className=""
                //    height={800}
                renderMode="svg"
              />
            </Document>
          </div>
        </div>
        <div className="md:max-w-4xl md:mx-5 lg:mx-auto z-0 pt-14 pb-20">
          <Footer />
        </div>
      </div>
    </m.div>
  );
}

export default Resume;
