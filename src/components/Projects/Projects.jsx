import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import projectsdata from "./projectsData";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects-section" id="projects">
            <Container>
                <div className="py-5">
                    <h1 className="mx-auto text-center mb-5">Projects</h1>
                    <Row xs={1} md={2} lg={3}>
                        {
                            projectsdata?.map((singleProject, idx) => <Col key={idx}>
                                <div className="my-3 mx-auto">
                                    <Card className="content rounded-3 bg-white">
                                        <div className="content-overlay"></div>
                                        <Card.Img className="content-image" variant="top" src={singleProject?.image[0]} widht="100%" height="200px" />
                                        <Card.Body>
                                            <Card.Title className="fs-3">{singleProject?.projectName}</Card.Title>
                                            <h5 className="py-1">{singleProject?.type}</h5>
                                        </Card.Body>
                                        <div className="content-details fadeIn-bottom">
                                            {/* <h4 className="content-title text-white">{singleProject?.projectName}</h4> */}
                                            <Button variant="outline-warning">View Details</Button>
                                            <div className="mt-4">
                                                <Button className="m-1" variant="outline-warning" size="sm">Live Site</Button>
                                                <Button className="m-1" variant="outline-warning" size="sm">Client Site</Button>
                                                <Button className="m-1" variant="outline-warning" size="sm">Server Site</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </Col>)
                        }
                    </Row>
                    {/* <Row xs={1} md={2} lg={3}>
                        <Col>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img
                                    className="content-image"
                                    src="https://i.imgur.com/7cNRozs.jpg"
                                    alt=""
                                />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Geysers Valley Hotel</h3>
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </div>
            </Container>
        </div>
    );
};

export default Projects;
