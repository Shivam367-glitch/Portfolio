import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Projects.css';
import { projects } from './projectList';

function Projects() {
 

  return (
     <>
      <div className='container project_container'>
        <h2 className='text-center mt-2  heading wow animate__animated animate__bounceInDown'>Projects</h2>
        <p >Check out some of my projects right here</p>
        <div className='card_div'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 mb-4 project_inner'>
            {projects.map((project) => {
              return (
                <div className="col mb-4">
                  <Card className="h-100 card" border='info' >
                    <div className="card-img-container">
                      <Card.Img
                        variant="top"
                        className="card-img"
                        src={project.imageSrc}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="flex-grow-1">
                        <Card.Title className="mb-3 mb-md-0">
                          {project.Name}
                        </Card.Title>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mt-2">
                        <Card.Link href={project.Live} target="_blank">
                          <Button variant="outline-warning">Live Demo</Button>
                        </Card.Link>
                        <Card.Link href={project.Github}>
                          <Button variant="outline-secondary">Source Code</Button>
                        </Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
