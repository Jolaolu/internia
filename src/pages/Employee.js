import React from 'react'
import './styles/Employee.css'
import Sidebar from '../components/Sidebar';
import Arrow from '../components/Arrow';

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
                         <div className="box"></div>
                         <div className="employee-tag">EMPLOYEE <Arrow/> </div>
                         <div className="employee-tag">SALARY <Arrow/> </div>
                         <div className="employee-tag">STATUS <Arrow/> </div>
                         <div className="employee-tag">MANAGE </div>
                     </div>
                     <div className="main-content"> 
                        <div className="content">
                            
                        </div>
                        <div className="content">

                        </div>
                        <div className="content">

                        </div>
                        <div className="content">

                        </div>
                        <div className="content">

                        </div>
                        <div className="content">

                        </div>
                        <div className="content">

                        </div>
                     </div>
                </aside>
            
                
            </section>
        </div>
    )
}
export default Employee
