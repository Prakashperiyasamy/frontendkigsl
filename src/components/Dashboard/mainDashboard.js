import React from 'react';
import BodyDashboard from  './BodyDashboard'
import Header from './Header'
import LeftSideBar from './leftsidebar'
import Model from './../model'
const MainDashboard =()=>{
    return(
        <div class="contact-wraper">
               <LeftSideBar/>
               <div class="rightbar">
               <Header/>
               </div>
               {/* <Model/> */}
            </div>
    )
}
export default MainDashboard