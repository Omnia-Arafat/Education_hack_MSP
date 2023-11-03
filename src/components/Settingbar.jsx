import React, { useState } from 'react';
import { FaTh, Star, Delete, FaThLarge, FaGlobe } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

import { DeleteForever, StarBorder } from '@mui/icons-material';

const Settingbar = ({children}) => {
  const [selectedLink, setSelectedLink] = useState(null);
  const navigate = useNavigate();

  const menuItem_v2 = [
    {
      path: "dashboard/Settings/DomainManagement",
      name: "Domain Management",
      icon: <FaGlobe />,
    },
    {
      path: "dashboard/Settings/Subscription",
      name: "Subscription",
      icon: <StarBorder />,
    },
    {
      path: "dashboard/Settings/RemoveBrand",
      name: "Remove Brand",
      icon: <DeleteForever />,
    },
  ];

  const handleLinkClick = (path) => {
    setSelectedLink(path);
    navigate(path);
  };

  return (
    <div className="container main-cont">
      <div className="settingbar-cont" style={{ width: "25%" }}>
        {
            menuItem_v2.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display:  "block" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
        
        }
                        <main>{children}</main>

      </div>

    
    </div>
  );
};

export default Settingbar;
