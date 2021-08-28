import React from 'react';

import HeroImg from '../../assets/images/hero-bg.png';

const BannerComponent = () => {
    return(
        <React.Fragment>
            <div className='banner-wrap'>
                <div className='banner-text'>
                    <h1>Katha Utsav 2021</h1>
                    <p className='story-text'>Celebrating Story!</p>
                    <p className='style-format'>Search for Excellence in Creative <br/>
                        Writing is here...</p>
                </div>
                <div className='banner-image'>
                    <img src={HeroImg} alt="hero" />;
                </div>
            </div>
        </React.Fragment>
    )
}

export default BannerComponent;

