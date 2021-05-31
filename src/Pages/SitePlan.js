import React,  { useState } from 'react';
import {Document,pdfjs, Page} from "react-pdf";
import sitePlan from '../Docs/Situationplan.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 function SitePlan() {
     const [pageNumber] = useState(1);
    return (
        <div>
            <Document
                file={sitePlan}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    );
}
export default SitePlan


