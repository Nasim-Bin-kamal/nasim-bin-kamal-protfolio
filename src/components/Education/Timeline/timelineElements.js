import { FaGraduationCap, FaSchool } from "react-icons/fa";

let timelineElements = [
    {
        id: 0,
        courseTitle: "B.sc in CSE",
        institute: "Daffodil International University, Dhaka.",
        description:
            "CGPA- 3.75 out of 4.00",
        date: "January 2017- January 2021",
        eduIcon: <FaGraduationCap />
    },
    {
        id: 1,
        courseTitle: "H.S.C in Science",
        institute: "Govt. Science College, Dhaka.",
        description:
            "GPA- 4.33 out of 5.00",
        date: "June 2013 - December 2015",
        eduIcon: <FaSchool />
    },
    {
        id: 2,
        courseTitle: "S.S.C in Science",
        institute: "Shahrasti Govt. High School, Chandpur.",
        description:
            "GPA -5.00 out of 5.00",
        buttonText: "Company Website",
        date: "January 2011 - January 2013 ",
        eduIcon: <FaSchool />
    }
];

export default timelineElements;