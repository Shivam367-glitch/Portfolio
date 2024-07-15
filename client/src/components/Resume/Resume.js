import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const width = (window.innerWidth) - (window.innerWidth * 0.65);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div >
      <h2>PDF Viewer</h2>
      <Container className='d-flex flex-column justify-content-around'>
        <Row className='text-center'>
          <Col xs={6} className='text-center'>
            <Document file="Resume.pdf" onLoadSuccess={onDocumentLoadSuccess} className='ms-4'>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} width={width} scale={2.2}className='border border-success mb-1'>
                  <p className='bg-secondary w-45 msAuto'>Page {index + 1} of {numPages}</p>
                </Page>
              ))}
            </Document>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='text-dark'>
            <span className='font-weight-bold'>OR</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='p-2'>
            <a href='Resume.pdf' download='Shivam_Mishra_Resume' className='msAuto'><Button className=" btn global_btn">Download Resume</Button></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
