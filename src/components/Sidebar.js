import React from 'react'
import Logo from './Logo';
import './styles/Sidebar.css';
function Sidebar (){

    return(
        <aside className="wrapper">
            <div className="first-section">
                <Logo/> <span className="logo-text">All Employees</span> 
            </div>
            <div className="second-section">
                <span className="project">Project</span>
                <div className="project-items">
                    <div className="project-icons"></div> 
                    <div className="project-name"> Arena Sport </div>  
                </div>
                <div className="project-items">
                    <div  className="project-icons"></div> 
                    <div className="project-name"> DSV </div> 
                </div>
                <div className="project-items">
                    <div  className="project-icons"></div> 
                    <div className="project-name">Seafood Mall</div>  
                </div>
                <div className="project-items">
                    <div className="project-icons"></div>  
                    <div className="project-name"> FireStar </div>
                </div>
                <div className="project-items">
                    <div className="project-icons"></div> 
                    <div className="project-name"> Zeta Bank </div>  
                </div>
            </div>
            <div className="third-section">
                <span className="project">Status</span>
                <div className="project-items">
                    <div className="project-icons"></div> <div className="project-name"> Full time </div>  
                </div>
                <div className="project-items">
                    <div className="project-icons"></div> <div className="project-name"> Part time </div>  
                </div>
            </div>
        </aside>
    )
}
export default Sidebar