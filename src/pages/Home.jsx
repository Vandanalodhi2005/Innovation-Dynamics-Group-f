import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Printers from '../components/Printers';
import TrustSection from '../components/home/TrustSection';
import HomeContact from '../components/home/HomeContact';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <WhyChooseUs />
            <Printers />
            <TrustSection />
            <HomeContact />
        </div>
    );
};

export default Home;
