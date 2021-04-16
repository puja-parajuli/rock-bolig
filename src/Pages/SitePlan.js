import React,  { useState } from 'react';
import {Document,pdfjs, Page} from "react-pdf";
import fileName from '../Docs/Situationplan.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 function SitePlan() {
     const [numPages, setNumPages] = useState(null);
     const [pageNumber, setPageNumber] = useState(1);
     function onDocumentLoadSuccess({ numPages }) {
        // setNumPages(numPages);
     }
    return (
        <div>
            <Document
                file={fileName}>
                <Page pageNumber={pageNumber} />
             </Document>

        </div>
    );
}
export default SitePlan


