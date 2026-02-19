import React from 'react';
import Hero from '../components/Hero';
import Printers from '../components/Printers';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Printers />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
