import React, { useEffect, useState } from 'react';
import { contactActions } from '../../actions/contact.action'
import { useDispatch, useSelector } from 'react-redux';
import Model from '../model'
const BodyDashboard = (props) => {

    const [Enable, setEnable] = useState(false)
    const [EditData, setEditData] = useState("")


    const dispatch = useDispatch()
    const totalCount = useSelector(state => state.contactReducer.totalcontact)
    const auth = useSelector(state => state.authentication);
 
    useEffect(async () => {
        
        if(auth.loggedIn)
        {
            await dispatch(contactActions.totalcontact(auth))
        }
    }, [])

    const enableClick = () => {
        setEnable(data => !data)
    }

    const handleEdit = (data) => {
        enableClick()
        setEditData(data)
    }

    let count = props.teams.length > 0 ? props.teams : totalCount;
    return (
        <div>
            <div class="crm-bodycontent">
                <div class="crm-header">
                    <div class="contact-card-lft">
                        <h1 class="title">Contact</h1>
                        <div class="sortby-date">
                            <label>Sort by</label>
                            <select >
                                <option value="Date">Date Created</option>
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
                        <button type="button" class="bttn addcontactbtn" onClick={enableClick} ><span class="iconscontact icon-person_add-24px"></span>
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
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone-No</th>
                                <th>0utgoingcall_Count</th>
                                <th>Incomingcall_Count</th>
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
                            {
                                count && count.map((each) => {
                                    return (<tr>
                                        <td>
                                            <div class="checkbox-gp">
                                                <input type="checkbox" id="checkbox_1" />
                                                <label for="checkbox_1"></label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="basic-info">
                                                <div class="basic-icon">
                                                    <span class="icon-account_circle-24px"></span>
                                                </div>
                                                <div class="basic-profile">
                                                    <h1>{each.name}</h1>
                                                    {/* <span class="email">angrew.heston@gmail.com</span> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{each.location}</td>
                                        <td>{each.number}</td>
                                        <td>{each.outgoingcall_Count}</td>
                                        <td>{each.Incomingcall_Count}</td>
                                        <td>{each.created_date}</td>
                                        <td><i class="fa fa-pencil-square-o" aria-hidden="true" onClick={() => handleEdit(each)}></i></td>
                                        <td><i class="fa fa-trash" aria-hidden="true" onClick={() => { dispatch(contactActions.deletecontact(each,auth)) }}></i>
                                        </td>
                                        {/* <td class="text-right edu-bttn dropdown">
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
                                </td> */}
                                    </tr>)

                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            {Enable &&
                <Model
                    enableClick={enableClick}
                    Enable={Enable}
                    EditData={EditData}
                />}
        </div>
    )
}
export default BodyDashboard