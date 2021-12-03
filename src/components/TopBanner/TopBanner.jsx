import AOS from 'aos';
import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { HiDownload } from "react-icons/hi";
import Typical from 'react-typical'
import ParticleBackground from '../ParticleBackgroud/ParticleBackground';
import './TopBanner.css';


const TopBanner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });


    }, []);
    return (
        <div className="banner mx-auto d-flex flex-column justify-content-center align-items-center" id="home">
            {/* <ParticleBackground /> */}
            <Container>
                <div className="mx-auto text-white d-flex justify-content-center align-items-center flex-column all-info">
                    <h3 className="">Hello, I'm Nasim</h3>
                    <h1 className="designation py-2">I'm a <span className="main-title">
                        <Typical
                            steps={[' Web Developer', 3000, ' Frontend Developer', 3000, ' React Developer', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </span></h1>
                    <p className="desc">I'm interested in developing projects with JavaScript, Node.js, and React.js technology. I am devoted to building easy-to-use, user-friendly websites, and applications.</p>
                    <a href="https://drive.google.com/file/d/1r8c55kC_S73Lf8lQlCpXuFL94IjHH-pF/view?usp=sharing" target="_blank" rel="noreferrer">
                        <Button className="rounded-pill px-4 border-2 mt-3" variant="outline-light" size="lg" data-aos="flip-up">
                            Resume <HiDownload />
                        </Button>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default TopBanner;