import React from 'react';
import BodyDashboard from  './BodyDashboard'
import Header from './Header'
import LeftSideBar from './leftsidebar'
const MainDashboard =()=>{
    return(
        <div class="contact-wraper">
               <LeftSideBar/>
               <div class="rightbar">
               <Header/>
               <BodyDashboard/>
               </div>
            </div>
    )
}
export default MainDashboard