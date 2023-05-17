import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive? "text-lg text-primary font-semibold border-b-2 border-t-2 border-primary border-dotted" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;