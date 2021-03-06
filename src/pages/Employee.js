import React from 'react';
import axios from 'axios'
import './styles/Employee.css'
import Sidebar from '../components/Sidebar';
import UpArrow from '../components/UpArrow';
import DownArrow from '../components/DownArrow';

class Employee extends React.Component{
    constructor(){
        super()
        this.state = {
            userData: [],

        }
    }
    componentWillMount(){
        axios.get(`https://api.github.com/users?since=135&per_page=8`)
        .then(response => this.setState({
            userData : response.data
        }))
        .catch(err=> {console.log(err)});
    }

    generateUsers(){
        return this.state.userData.map( user =>{
            return(
                <div className="content">
                    <div className="box box-content"> </div>
                    <div className="user-profile"> 
                        <div className="user-profile-picture">
                            <img src={user.avatar_url} alt="" srcSet="" className="profile-picture"/> 
                        </div> 
                        <div className="user-profile-detail"> 
                            <span className="user-name">{user.login} </span>
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
                        <span className="edit"> 
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 469.331 469.331" > 
                                <g>
                                    <path d="M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z"/>
                                </g>
                            </svg>
                        </span>
                        <span className="edit-seperator"> </span>
                        <span className="delete"> 
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 486.4 486.4" >
                                <g>
	                                <g>
		                                <path d="M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z"/>
		                                <path d="M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5C229.7,404.9,235.7,411,243.2,411z"/>
		                                <path d="M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C141.6,390.1,147.7,396.1,155.1,396.1z"/>
		                                <path d="M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9C317.8,390.1,323.8,396.1,331.3,396.1z"/>
                                    </g>
                                </g>  
                            </svg>  
                        </span>
                    </div>
                </div>
            )
        })
    }

    

    render() {
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
                        <div className="content-menu-wrapper">
                            <div className="content-menu">
                                <div className="box"></div>
                                <div className="employee-tag">EMPLOYEE <UpArrow/></div>
                                <div className="employee-tag">SALARY <UpArrow/> </div>
                                <div className="employee-tag">STATUS <DownArrow/> </div>
                                <div className="employee-tag">MANAGE </div>
                            </div>
                        </div>
                        <div className="main-content"> 
                        {this.generateUsers()}
                        </div>
                    </aside>
                </section>    
            </div>
        )
    }
}  
export default Employee;
