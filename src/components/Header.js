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
                        <li className="item"> <a href="#1">Calendar</a> </li>
                        <li className="item"> <a href="#1">Statistics</a> </li>
                        <li className="item item-black"> <a href="#1" className="item-black"> Employee</a></li>
                        <li className="item"> <a href="#1"> Client</a></li>
                        <li className="item"> <a href="#1">Equipment</a> </li>
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