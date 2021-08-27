import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Timeline from '../Timeline/Timeline';
import AboutKatha from '../AboutKatha/AboutKatha';
import KathaHistory from '../KathaHistory/KathaHistory';
import Mentors from '../Mentors/Mentors';

const Home = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <Timeline />
            <AboutKatha />
            <KathaHistory />
            <Mentors />
        </React.Fragment>
    );
};

export default Home;