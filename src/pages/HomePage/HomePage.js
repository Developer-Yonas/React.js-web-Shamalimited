import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css';
import { InitScripts } from './components/InitScripts';
import 'animate.css';

import NavBar from './components/NavBar'
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import Services from './components/Services';
// import Clients from './components/Clients';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
// import CallBanner from './components/CallBanner';
// import OurTeams from './components/OurTeams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Test2 from './components/Test2'
import dataBanner from './components/assets/data/dataImagesBanner.json'
// import dataClients from './components/assets/data/dataImagesClients.json'
import dataTestimonials from './components/assets/data/dataImagesTestimonials.json'
// import dataTeams from './components/assets/data/dataImagesOurTeams.json'
import dataTopBar from './components/assets/data/dataIconTopBar.json'
import dataPortfolio from './components/assets/data/dataImagesPortfolio.json'
import dataServices from './components/assets/data/dataIconServices.json'

const HomePage = () => {
    InitScripts();
    return (
        <>
            {/* <Test2 data={dataTopBar} /> */}
            <TopBar data={dataTopBar} />
            <NavBar />
            <Banner data={dataBanner} />
            <Profile />
            <Services data={dataServices} />
            {/* <Clients data={dataClients} /> */}
            <Portfolio data={dataPortfolio} />
            <Testimonials data={dataTestimonials} />
            {/* <CallBanner /> */}
            {/* <OurTeams data={dataTeams} /> */}
            <ContactUs />
            <Footer />

        </>





    )
}


export default HomePage