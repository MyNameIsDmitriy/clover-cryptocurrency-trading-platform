import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return(
    <>
      <div className="">
        <NavLink to="/trade" className="">
          Trade
        </NavLink>
        <NavLink to="/pools" className="">
          Pools
        </NavLink>
        <NavLink to="/farms" className="">
          Farms
        </NavLink>
        <NavLink to="/analytics" className="">
          Analytics
        </NavLink>
        <NavLink to="/more" className="">
          More
        </NavLink>
      </div>
    </>
  );
}

export default Navigation; 