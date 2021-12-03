import React from 'react';
import Particles from "react-tsparticles";
import particleConfig from './Config/particle-config';


const ParticleBackground = () => {
    return (
        <div>
            <Particles params={particleConfig} />
        </div>
    );
};

export default ParticleBackground;