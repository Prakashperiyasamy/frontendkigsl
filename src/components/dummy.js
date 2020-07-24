import React from 'react';

const Dummy = () =>{
    return(  <div>
        {/* <AddTodo />
        <TodoList />
        <Footer /> */}
    
    <div class="contact-wraper">
            {/* <!--Left Sidebar--> */}
            <div class="leftbar">
                <div class="sidebar">
                    <div class="logobar">
                        <a href="javascript:void(0)">
                            <span class="icon-menu-24px"></span>
                        </a>
                    </div>
                    <div class="navigation">
                        <ul class="vertical-menu">
                            <li>
                                <a href="javascript:void(0)">
                                    <span class="icon-home-24px"></span>
                                </a>
                            </li>
                            <li>
                                <a class="active" href="javascript:void(0)">
                                    <span class="icon-group-24px"></span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span class="icon-business-24px"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!--Rightbar--> */}
            <div class="rightbar">
                {/* <!--Top Header--> */}
                <div class="top-header">
                    <div class="search-phone-view d-flex align-items-center">
                        <div class="search-box">
                            <input type="text" placeholder="Type in to Search.."/>
                            <span class="searchicon icon-search-24px"></span>
                        </div>
                        <div class="callincoming">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="profile-setting">
                        <ul>
                            <li class="dropdown">
                                <a href="javascript:void(0)" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span class="icon-account_circle-24px"></span>
    
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>Logout
                                    </a>
    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!--body content--> */}
                <div class="crm-bodycontent">
                    <div class="crm-header">
                        <div class="contact-card-lft">
                            <h1 class="title">Contact</h1>
                            <div class="sortby-date">
                                <label>Sort by</label>
                                <select>
                                    <option>Date Created</option>
                                </select>
                            </div>
                        </div>
                        <div class="contact-bttn-group">
                            <div class="filter-dropdown">
                                <select>
                                    <option>Filter</option>
                                </select>
                                <span class="iconsfilter icon-filter_list-24px"></span>
                            </div>
                            {/* <!-- <button type="button" class="bttn filterbtn">Filter <span
                                    class="iconsfilter icon-filter_list-24px"></span></button> --> */}
                            <button type="button" class="bttn addcontactbtn" data-toggle="modal" data-target="#exampleModalCenter"><span class="iconscontact icon-person_add-24px"></span>
                                Add Contact</button>
                            <button type="button" class="bttn togglebtn">
                                <span class="toggleicon icon-more_horiz-24px"></span>
                            </button>
                        </div>
                    </div>
    
                    {/* <!--tableview--> */}
                    <div class="contact-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span class="plusicon icon-add-24px"></span>
                                    </th>
                                    <th>Basic Info</th>
                                    <th>Company</th>
                                    <th>Lead Score</th>
                                    <th>Phone</th>
                                    <th>Tags</th>
                                    <th>Create Date</th>
                                    <th class="text-right">
                                        <button type="button" class="bttn-arrow rightarrow"><i class="fa fa-caret-left"
                                                aria-hidden="true"></i></button>
                                        <button type="button" class="bttn-arrow lefarrow"><i class="fa fa-caret-right"
                                                aria-hidden="true"></i></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="checkbox-gp">
                                            <input type="checkbox" id="checkbox_1"/>
                                            <label for="checkbox_1"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="basic-info">
                                            <div class="basic-icon">
                                                <span class="icon-account_circle-24px"></span>
                                            </div>
                                            <div class="basic-profile">
                                                <h1>Andrew Heston</h1>
                                                <span class="email">angrew.heston@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Cool Company</td>
                                    <td>201</td>
                                    <td>022-634-1573</td>
                                    <td>test tag</td>
                                    <td>22 Oct 2020</td>
                                    <td class="text-right edu-bttn dropdown">
                                        <button type="button" class="activetoggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="icon-more_horiz-24px"></span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-edit-24px"></span>Create
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-delete-24px"></span>Delete
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-update-24px"></span>Update
                                            </a>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td>
                                        <div class="checkbox-gp">
                                            <input type="checkbox" id="checkbox_2"/>
                                            <label for="checkbox_2"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="basic-info">
                                            <div class="basic-icon">
                                                <span class="icon-account_circle-24px"></span>
                                            </div>
                                            <div class="basic-profile">
                                                <h1>Andrew Heston</h1>
                                                <span class="email">angrew.heston@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Cool Company</td>
                                    <td>201</td>
                                    <td>022-634-1573</td>
                                    <td>test tag</td>
                                    <td>22 Oct 2020</td>
                                    <td class="text-right edu-bttn dropdown">
                                        <button type="button" class="activetoggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="icon-more_horiz-24px"></span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-edit-24px"></span>Create
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-delete-24px"></span>Delete
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-update-24px"></span>Update
                                            </a>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td>
                                        <div class="checkbox-gp">
                                            <input type="checkbox" id="checkbox_3"/>
                                            <label for="checkbox_3"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="basic-info">
                                            <div class="basic-icon">
                                                <span class="icon-account_circle-24px"></span>
                                            </div>
                                            <div class="basic-profile">
                                                <h1>Andrew Heston</h1>
                                                <span class="email">angrew.heston@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Cool Company</td>
                                    <td>201</td>
                                    <td>022-634-1573</td>
                                    <td>test tag</td>
                                    <td>22 Oct 2020</td>
                                    <td class="text-right edu-bttn dropdown">
                                        <button type="button" class="activetoggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="icon-more_horiz-24px"></span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-edit-24px"></span>Create
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-delete-24px"></span>Delete
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-update-24px"></span>Update
                                            </a>
                                        </div>
                                    </td>
                                </tr>
    
                                <tr>
                                    <td>
                                        <div class="checkbox-gp">
                                            <input type="checkbox" id="checkbox_4"/>
                                            <label for="checkbox_4"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="basic-info">
                                            <div class="basic-icon">
                                                <span class="icon-account_circle-24px"></span>
                                            </div>
                                            <div class="basic-profile">
                                                <h1>Andrew Heston</h1>
                                                <span class="email">angrew.heston@gmail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Cool Company</td>
                                    <td>201</td>
                                    <td>022-634-1573</td>
                                    <td>test tag</td>
                                    <td>22 Oct 2020</td>
                                    <td class="text-right edu-bttn dropdown">
                                        <button type="button" class="activetoggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="icon-more_horiz-24px"></span>
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-edit-24px"></span>Create
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-delete-24px"></span>Delete
                                            </a>
                                            <a class="dropdown-item" href="#">
                                                <span class="activicon icon-update-24px"></span>Update
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        {/* <!--Add Contact Modal--> */}
        <div class="add-contact">
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Add Contact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="contact-form-gorup">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Created Date</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Number</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Incoming Call Count</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Location</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <label>Outgoing Call Count</label>
                                                <div class="select-wrap">
                                                    <input type="text" class="inputivew" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <div class="form-group">
                                                <div class="groupbttn">
                                                    <button type="button" class="bttn submitbtn">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>)
}

export default Dummy