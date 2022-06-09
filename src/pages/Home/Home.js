import React from 'react';
import Reviews from './Reviews/Reviews';
import Services from './Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Skills/>
            <Services/>
            <Reviews/>
        </div>
    );
};

export default Home;