import React from 'react'
import './styles/Employee.css'
import Sidebar from '../components/Sidebar';
import UpArrow from '../components/UpArrow';
import DownArrow from '../components/DownArrow';
import Neo from '../assets/neo-profile.jpg';
import Edit from '../assets/edit.svg';
import Delete from '../assets/garbage.svg';

function Employee() {
    return(
        <div>
            <section className="">
                <div className="add-employee">
                    <div className="section-name">employee</div>
                     <div className="section-add"><button className="section-button"> add employee </button></div>
                </div>
            </section>
            <section>
                 <Sidebar/>
                 <aside className="contents">
                     <div className="content-menu">
                         
                         <div className="employee-tag">
                            <div className="box"></div>
                             EMPLOYEE <UpArrow/>
                        </div>
                         <div className="employee-tag">SALARY <UpArrow/> </div>
                         <div className="employee-tag">STATUS <DownArrow/> </div>
                         <div className="employee-tag">MANAGE </div>
                     </div>
                     {/* <div className="main-content"> 
                        <div className="content">
                            <div className="box"> </div>
                            <div className="user-profile"> 
                               <div className="user-profile-picture">
                                    <img src={Neo} alt="" srcset="" className="profile-picture"/> 
                                </div> 
                                <div className="user-profile-detail"> 
                                    <span className="user-name"> Ronny Asmo </span>
                                    <span className="user-title">Software Engineer</span>
                                </div>  
                            </div>    
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> 
                                <span className="edit"> <img src={Edit} alt="" className="edit-user"/> </span>
                                <span className="edit-seperator"> </span>
                                <span className="delete"><img src={Delete} alt="" className="delete-user"/></span>
                            </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                        <div className="content">
                        <div className="box"> </div>
                            <div className="user-profile-picture"> <img src={Neo} alt="" srcset="" className="profile-picture"/> </div>
                            <div className="user-profile-detail"> 
                                <span className="user-name"> Ronny Asmo </span>
                                <span className="user-title">Software Engineer</span>
                            </div>
                            <div className="user-salary"> 
                                <span className="salary">3.000 NOK</span>
                                <span className="salary-position">part time</span>
                            </div>
                            <div className="user-status">
                                <span className="status">test period</span>
                                <span className="months">2 months</span>
                            </div>
                            <div className="user-edit"> </div>
                        </div>
                     </div> */}
                </aside>
            
                
            </section>
        </div>
    )
}
export default Employee
