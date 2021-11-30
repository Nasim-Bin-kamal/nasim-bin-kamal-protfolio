import React from 'react';
import About from '../../components/About/About';
import Footer from '../../components/About/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Education from '../../components/Education/Education';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import TopBanner from '../../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <TopBanner />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;