import timelineElements from "./timelineElements";
import "./Timeline.css";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";

const Timeline = () => {
    let eduIconStyles = { background: "#ff7b42" };

    return (
        <div className="mx-auto education-section">
            <Container>
                <h1 className="mx-auto text-center mt-5 py-5">Education</h1>
                <VerticalTimeline>
                    {timelineElements.map((element) => {

                        return (
                            <VerticalTimelineElement
                                key={element?.id}
                                date={element?.date}
                                dateClassName="date"
                                iconStyle={eduIconStyles}
                                icon={element?.eduIcon}
                            >
                                <h3 className="courses fw-bold">{element.courseTitle}</h3>
                                <h5>{element?.institute}</h5>
                                <p className="text-secondary">CGPA: {element?.description}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </Container>
        </div>
    );
};

export default Timeline;
