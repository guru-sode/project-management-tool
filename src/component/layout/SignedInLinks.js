import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
            <ul className="right">
                <li>
                    <NavLink to='/createProject'>New Project</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Log out</NavLink>
                </li>
                <li>
                    <NavLink to='/' className="btn btn-floating blue lighten-1">
                        GK
                    </NavLink>
                </li>
            </ul>
    )
}

export default SignedInLinks;