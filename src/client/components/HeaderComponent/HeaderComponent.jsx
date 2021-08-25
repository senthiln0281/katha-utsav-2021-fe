import React from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import Logo from "../../assets/katha-logo.png";

class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div className='container'>
                        <div className='header-wrap'>
                            <div className='logo'><img src={Logo} alt="logo" /></div>
                            <div className='menus'>
                                <ul>
                                    <li><a href="#">Why Katha?</a></li>
                                    <li><a href="#">Process</a></li>
                                    <li><a href="#">About Katha21</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Mentors</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <BannerComponent />
            </>
        )
    }
}

export default HeaderComponent;