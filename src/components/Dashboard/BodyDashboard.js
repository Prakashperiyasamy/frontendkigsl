import React from 'react';

const BodyDashboard = ()=>{
    return( <div class="crm-bodycontent">
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
            </tbody>
        </table>
    </div>
</div>)
}
export default BodyDashboard