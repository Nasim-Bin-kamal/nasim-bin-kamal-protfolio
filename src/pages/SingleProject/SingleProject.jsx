import React from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import useProjects from '../../hooks/useProducts';
import './SingleProject.css';
import { FaLink, FaGithub } from "react-icons/fa";

const SingleProject = () => {
    const { projectId } = useParams();
    console.log(projectId)
    const [projects] = useProjects();
    console.log(projects);
    const singleProject = projects?.find(project => project.id === projectId) || {};
    console.log(singleProject);
    const { projectName, images, type, technologies, features, liveSite, clientSite, serverSite } = singleProject || {};

    return (
        <div className='singleSection'>
            <NavigationBar />
            <Container>

                <h1 className="mx-auto py-5 text-center fw-bold mt-4">Project Details</h1>
                <Row xs={1} md={1} lg={2} >
                    <Col xs={12} md={12} lg={7} >
                        <div className="mb-5 mt-2">
                            <Carousel className="border border-3  rounded-3">
                                {
                                    images?.map((image, img_id) => <Carousel.Item key={img_id}>
                                        <img
                                            className="d-block w-100"
                                            src={image}
                                            alt="slide"
                                        />
                                    </Carousel.Item>)
                                }
                            </Carousel>
                            <div className="mt-4">
                                <span className="fs-4">Explore:</span>
                                <a href={liveSite} target="_blank" rel="noopener noreferrer"><Button className="m-1 fw-bold border-0" variant="warning" ><FaLink className="me-2 mb-1" />Live Site</Button></a>
                                <a href={clientSite} target="_blank" rel="noopener noreferrer"><Button className="m-1 fw-bold border-0" variant="warning" ><FaGithub className="me-2 mb-1" />Client Site</Button></a>
                                <a href={serverSite} target="_blank" rel="noopener noreferrer"><Button className="m-1 fw-bold border-0" variant="warning" ><FaGithub className="me-2 mb-1" />Server Site</Button></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={5} >
                        <div className="mb-5 mt-2">
                            <h2>{projectName}</h2>
                            <h5 className="text-secondary">{type}</h5>
                            <h4>Features:</h4>
                            <ul>
                                {
                                    features?.map((feature, fea_id) => <li key={fea_id}>{feature}</li>)
                                }
                            </ul>
                            <h4 className="py-2">Technologies:</h4>
                            <div className="">
                                {
                                    technologies?.map((technology, tech_id) => <span key={tech_id} className="mx-1 my-1 py-1 px-2 text-white rounded-2 technology">{technology}</span>)
                                }
                            </div>

                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default SingleProject;