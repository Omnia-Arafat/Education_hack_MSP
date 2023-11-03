import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
} from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationIcon from '@mui/icons-material/Notifications';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/logo.PNG'

const Sidebar = ({ children, currentPage }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const mainLinks = [
        {
            path: "/dashboard/MyLinks",
            name: "MyLinks",
            icon: <LinkIcon />
        },
        {
            path: "dashboard/Notification",
            name: "Notification",
            icon: <NotificationIcon />
        },
        {
            path: "dashboard/Templates",
            name: "Templates",
            icon: <ViewComfyOutlinedIcon />
        },
        {
            path: "dashboard/Settings/DomainManagement",
            name: "Settings",
            icon: <SettingsIcon />
        },
        {
            path: "dashboard/Help",
            name: "Help",
            icon: <HelpOutlineIcon />
        }
    ];

    const accountLinks = [
        {
            path: "dashboard/MyAccount",
            name: "MyAccount",
            icon: <AccountCircleOutlinedIcon />
        },
        {
            path: "dashboard/Logout",
            name: "Logout",
            icon: <LogoutIcon />
        }
    ];

    return (
        <div className='cont'>
            <div className="nav-home">{currentPage}</div> {/* Display the current page name here */}
            <div className="container ">
                <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo"><img src={logo} alt='logo' /></h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        </div>
                    </div>
                    {/* Main Links */}
                    {mainLinks.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))}
                    {/* Account Links */}
                    <div className="account-links" >
                    <hr/>

                        {accountLinks.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
