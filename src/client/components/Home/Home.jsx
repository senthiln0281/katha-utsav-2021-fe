import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Timeline from '../Timeline/Timeline';
import AboutKatha from '../AboutKatha/AboutKatha';
import KathaHistory from '../KathaHistory/KathaHistory';
import Mentors from '../Mentors/Mentors';

const Home = (props) => {
    console.log('testing', props);
    return (
        <React.Fragment>
            <HeaderComponent {...props}/>
            <Timeline />
            <AboutKatha />
            <KathaHistory />
            <Mentors />
        </React.Fragment>
    );
};

export default Home;