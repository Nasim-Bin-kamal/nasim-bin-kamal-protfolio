import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './Skills.css';

const skillset = [
    {
        skillName: "HTML",
        percentage: "80"
    },
    {
        skillName: "CSS",
        percentage: "75"
    },
    {
        skillName: "BootStrap",
        percentage: "70"
    },
    {
        skillName: "Tailwind CSS",
        percentage: "50"
    },
    {
        skillName: "JavaScript",
        percentage: "70"
    },
    {
        skillName: "React",
        percentage: "65"
    },
    {
        skillName: "Firebase",
        percentage: "50"
    },
    {
        skillName: "React BootStrap",
        percentage: "50"
    },
    {
        skillName: "Material UI",
        percentage: "50"
    },
    {
        skillName: "Node JS",
        percentage: "30"
    },
    {
        skillName: "Express JS",
        percentage: "35"
    },
    {
        skillName: "MongoDB",
        percentage: "50"
    }
]

const Skills = () => {
    return (
        <div className="skills">
            <Container>
                <div>
                    <h1 className="mx-auto my-5 text-center">Skills</h1>
                </div>
                <Row xs={1} md={1} lg={2} className="my-5 mx-auto">
                    <Col>
                        {
                            skillset.slice(0, skillset.length / 2).map((skill, i) => <div key={i} className="mx-auto p-3">
                                <h6>{skill?.skillName}</h6>
                                <ProgressBar className="skill-progress" animated now={skill?.percentage} label={`${skill?.percentage}%`} />
                            </div>)
                        }
                    </Col>
                    <Col>
                        {
                            skillset.slice(skillset.length / 2, skillset.length).map((skill, i) => <div key={i} className="mx-auto p-3">
                                <h6>{skill?.skillName}</h6>
                                <ProgressBar className="skill-progress" animated now={skill?.percentage} label={`${skill?.percentage}%`} />
                            </div>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;