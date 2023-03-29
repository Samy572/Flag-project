import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="navigation">
			<ul>
				<NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to="/">accueil</NavLink>
				<NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to="/about">à propos</NavLink>
				<NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to="/blog">blog</NavLink>
			</ul>
		</div>
	);
};

export default Navbar;
