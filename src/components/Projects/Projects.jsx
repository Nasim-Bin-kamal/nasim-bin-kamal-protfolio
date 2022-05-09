import React, { useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import useProjects from "../../hooks/useProducts";



const Projects = () => {
    const [projects] = useProjects();

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    }, []);


    return (
        <div className="projects-section" id="projects">
            <Container>
                <div className="py-5">
                    <h1 className="mx-auto text-center mb-5">Projects</h1>
                    <Row xs={1} md={2} lg={3}>
                        {
                            projects?.map((singleProject, p_id) => <Col key={p_id}>
                                <div className="my-3 mx-auto">
                                    <Card className="content rounded-3 bg-white shadow-sm" data-aos="fade-up">
                                        <div className="content-overlay"></div>
                                        <Card.Img className="content-image" variant="top" src={singleProject?.images[0]} widht="100%" height="200px" />
                                        <Card.Body className="bg-light">
                                            <Card.Title className="fs-3 fw-bold project-name">{singleProject?.projectName}</Card.Title>
                                            <h5 className="py-1 text-secondary">{singleProject?.type}</h5>
                                        </Card.Body>
                                        <div className="content-details fadeIn-bottom">

                                            <Button onClick={() => { navigate(`/projects/${singleProject?.id}`) }} variant="outline-warning">View Details</Button>
                                            <div className="mt-4">
                                                <a href={singleProject?.liveSite} target="_blank" rel="noopener noreferrer"><Button className="m-1" variant="outline-warning" size="sm">Live Site</Button></a>
                                                <a href={singleProject?.clientSite} target="_blank" rel="noopener noreferrer"><Button className="m-1" variant="outline-warning" size="sm">Client Site</Button></a>
                                                <a href={singleProject?.serverSite} target="_blank" rel="noopener noreferrer"><Button className="m-1" variant="outline-warning" size="sm">Server Site</Button></a>
                                            </div>
                                        </div>
                                    </Card>
                                </div>

                            </Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Projects;
