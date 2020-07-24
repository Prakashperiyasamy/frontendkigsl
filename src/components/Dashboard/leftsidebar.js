import React from 'react';

const LeftSideBar = () => {
    return (
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
        </div>)
}

export default LeftSideBar 