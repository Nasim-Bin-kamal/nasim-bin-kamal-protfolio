import AOS from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import './About.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    }, []);
    return (
        <div className="about-section" id="about">
            <Container>
                <h1 className="mx-auto text-center pt-5">About</h1>
                <Row xs={1} md={1} lg={2} className="mx-auto pt-5 pb-3">
                    <Col>
                        <div className="mx-auto p-3" data-aos="zoom-in-up">
                            <img className="mx-auto  my-image rounded-3 img-fluid" src="https://i.ibb.co/N7QyFwp/DSC-0079-Copy-2.jpg" alt="" />
                        </div>
                    </Col>
                    <Col data-aos="fade-left">
                        <div className="mx-auto mt-3">
                            <h2 className="fw-bold">Nasim Bin Kamal</h2>
                            <h5>Web Developer based in <span>Bangladesh</span></h5>
                            <p className="text-secondary text-justify">I've been working on web development for a long time. So far I have designed and developed some full-stack websites, front-end websites, and landing pages also.My desire is to establish myself as a web developer, and serve my country in the IT industry.I'm constantly trying to upgrade my skills and implement it. </p>
                        </div>
                        <hr />
                        <div>
                            <h3>Personal Information</h3>
                            <Row>
                                <Col>
                                    <h6 className="py-1"><span className="text-secondary">Name: </span>Nasim Bin Kamal</h6>
                                    <h6 className="py-1"><span className="text-secondary">Age: </span>24 Years</h6>
                                    <h6 className="py-1"><span className="text-secondary">Nationality: </span>Bangladeshi</h6>
                                </Col>
                                <Col>
                                    <h6 className="py-1"><span className="text-secondary">Address: </span>Chandpur</h6>
                                    <h6 className="py-1"><span className="text-secondary">Phone: </span>+(88) 01787778498</h6>
                                    <h6 className="py-1"><span className="text-secondary">Email: </span>nasimbinkamal@gmail.com</h6>
                                </Col>
                            </Row>
                            <h5 className="mx-auto py-3">Follow</h5>
                            <div className="follow-links">
                                <a href="https://web.facebook.com/nbk.sagar/" target="_blank" rel="noreferrer"><FaFacebook className="me-3 fs-4 follow" /></a>
                                <a href="https://twitter.com/nasim_sagar" target="_blank" rel="noreferrer"><FaTwitter className="me-3 fs-4 follow" /></a>
                                <a href="https://www.instagram.com/nbksagar/" target="_blank" rel="noreferrer"><FaInstagram className="me-3 fs-4 follow" /></a>
                                <a href="https://www.linkedin.com/in/nasimbinkamal/" target="_blank" rel="noreferrer"><FaLinkedinIn className="me-3 fs-4 follow" /></a>
                                <a href="https://github.com/Nasim-Bin-kamal" target="_blank" rel="noreferrer"><FaGithub className="me-3 fs-4 follow" /></a>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;