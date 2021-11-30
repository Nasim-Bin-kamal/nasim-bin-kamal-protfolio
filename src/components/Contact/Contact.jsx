import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const handleSubmitMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hc5ueqa', 'template_iwix2r8', e.target, 'user_vxcxNKWCovuWOMND9liK6')
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    e.target.reset();
                }
            }).catch(error => {
                console.log(error.text);
            });

    }
    return (
        <div className="contact-section">
            <Container>
                <h1 className="mx-auto text-center mb-5">Contact</h1>
                <div className="mx-auto mb-5">
                    <Row xs={1} md={1} lg={2} className="d-flex justify-content-center align-items-center">
                        <Col>
                            <div className="mx-auto d-flex justify-content-center align-items-center">
                                <img className="mx-auto img-fluid" src="https://i.ibb.co/7yQKLg3/103967-OM0-NLW-209-ai-3.png" alt="" width="80%" />
                            </div>
                        </Col>
                        <Col>
                            <Form className="mx-auto px-2" onSubmit={handleSubmitMail}>
                                <Form.Group className="mb-3" controlId="formSenderName">
                                    <Form.Label className="input-label fw-bold">Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formSenderEmail">
                                    <Form.Label className="input-label fw-bold">Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formSenderMessage">
                                    <Form.Label className="input-label fw-bold">Message</Form.Label>
                                    <Form.Control as="textarea" name="message" placeholder="Write message" rows={4} required />
                                </Form.Group>
                                <Button className="w-100 border-0 btn-close-success contact-btn" type="submit" variant="dark">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contact;