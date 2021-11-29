import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmitMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_hc5ueqa', 'template_iwix2r8', e.target, 'user_vxcxNKWCovuWOMND9liK6')
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.text);
            });

    }
    return (
        <div>
            <Container>
                <h1 className="mx-auto text-center mb-5">Contact</h1>
                <div className="mx-auto my-3">
                    <Row xs={1} md={1} lg={2}>
                        <Col></Col>
                        <Col>
                            <Form className="mx-auto px-2" onSubmit={handleSubmitMail}>
                                <Form.Group className="mb-3" controlId="formSenderName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formSenderEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                                </Form.Group>
                                <Form.Group className="mb-3" name="message" controlId="formSenderMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Write message" rows={4} required />
                                </Form.Group>
                                <Button className="w-100" type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contact;