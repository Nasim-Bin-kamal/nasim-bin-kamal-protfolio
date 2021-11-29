import React from 'react';
import About from '../../components/About/About';
import Footer from '../../components/About/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Skills from '../../components/Skills/Skills';
import TopBanner from '../../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <TopBanner />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;