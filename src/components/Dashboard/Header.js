import React from 'react';
import BodyDashboard from './BodyDashboard'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    let totalcontact = useSelector(state => state.contactReducer.totalcontact)
    const [teams, setTeams] = React.useState(totalcontact);
    const [search, setSearch] = React.useState("");
    console.log(teams, "teams")
    return (
        <>
            <div class="top-header">
                <div class="search-phone-view d-flex align-items-center">
                    <div class="search-box">
                        <input type="text"
                            placeholder="Type in to Search.."
                            onChange={e => {
                                const test = totalcontact.filter(team => {
                                    return team.name.toLowerCase().includes(e.target.value.toLowerCase());
                                });
                                console.log("test: ", test);

                                // uncomment line below and teams is logged as I want
                                setTeams(test);
                                setSearch(e.target.value);
                            }}
                            type="text"
                            value={search} />
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
            <BodyDashboard teams={teams} />
        </>

    )
}

export default Header

