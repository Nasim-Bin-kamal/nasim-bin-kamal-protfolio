import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleProject = () => {
    const { projectId } = useParams();
    return (
        <div>
            <Container variant="dark">
                <h1 className="mx-auto py-5 text-center fw-bold">Project Details</h1>
                <Row xs={1} md={1} lg={2}>
                    <Col xs={12} md={12} lg={7}>
                        <Carousel className="border border-2 border-warning rounded-3">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/FVHRLSf/project11-1.png"
                                    alt="First slide"


                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/kQXyv7q/project11-2.png"
                                    alt="Second slide"

                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/kySW33m/project11-3.png"
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} md={12} lg={5}>
                        <div>
                            <h2>Name:Travel Time</h2>
                            <h3>Description</h3>
                            <h5>Full Stack Travel agency Website</h5>
                            <h4>Features</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquam!</li>
                            </ul>
                            <h4>Tools & Technology</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleProject;