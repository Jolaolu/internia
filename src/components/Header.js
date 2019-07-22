import React from 'react';
import './styles/Header.css';
import Notification from '../assets/notification.svg';
import Message from '../assets/email.svg';
import Logo from './Logo';
function Header () {

    return(
        <header className="">
            <nav className="navbar">
                <div className="brand"> 
                    <div className="logo"> 
                        <div className="circles">
                            <div className="logo-small"></div>
                            <Logo/>
                        </div>
                        <div className="name">Internia</div>
                    </div>
                </div>     
                <div className="nav-menu">
                    <ul className="menu-item">
                        <li className="item">Calendar</li>
                        <li className="item">Statistics</li>
                        <li className="item">Employee</li>
                        <li className="item">Client</li>
                        <li className="item">Equipment</li>
                    </ul>
                </div>
                <div className="profile-menu">
                    <div className="icons">
                            <img src={Notification} alt="" srcSet="" className="icon"/>
                            <img src={Message} alt="" srcSet="" className="icon"/>
                    </div>
                    <div className="profile-image"> </div>
                </div>
            </nav>

        </header>
    )

}

export default Header;