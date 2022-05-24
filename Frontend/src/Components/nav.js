import React, { useState, useContext } from 'react';
import UserContext from '../pages/User.js';
import LogContext from '../pages/Log.js';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	const user = useContext(UserContext);
	const authenticated = useContext(LogContext);
	{console.log(authenticated)}
	{console.log(authenticated)}
	if (authenticated.nameS == true) {
		return (
			<>
				<Nav>
					<Bars />

					<NavMenu>
						<div>{authenticated.nameS}</div>
						<NavLink to='/' >
							Home
						</NavLink>
						<NavLink to='/createaccount' >
							Create Account
						</NavLink>
						<NavLink to='/shopping' >
							Shopping Cart 🛒
						</NavLink>
					</NavMenu>
					<NavBtn>
						 <NavBtnLink to='/loggedInUser' >Log Out</NavBtnLink>
					</NavBtn>
				</Nav>
			</>
		);
	}
	else {
		return (
			<>
				<Nav>
					<Bars />

					<NavMenu>
						<div>{authenticated.nameS}</div>
						{console.log(authenticated.nameS)}
						<NavLink to='/' >
							Home
						</NavLink>
						<NavLink to='/createaccount' >
							Create Account
						</NavLink>
						<NavLink to='/shopping' >
							Shopping Cart 🛒
						</NavLink>

					</NavMenu>
					<NavBtn>
						 <NavBtnLink to='/login' >Log In</NavBtnLink>
					</NavBtn>
				</Nav>
			</>
		);
	}


};

export default Navbar;
