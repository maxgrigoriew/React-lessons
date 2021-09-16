import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
	let styles={
		textTransform: 'red',
	}
	return (
		<nav className={s.nav}>
			<ul className={s.nav__list}>
				<li className={`${s.nav__item} ${s.active}`}>
					<NavLink to="/profile" className={`nav-link ${s.nav__link}`} activeClassName={s.active} style={styles}>Profile</NavLink>
				</li>
				<li className={s.nav__item}>
					<NavLink to="/dialogs" className={`nav-link ${s.nav__link}`} activeClassName={s.active}>Messages</NavLink>
				</li>
				<li className={s.nav__item}>
					<NavLink to="/news" className={`nav-link ${s.nav__link}`} activeClassName={s.active}>News</NavLink>
				</li>
				<li className={s.nav__item}>
					<NavLink to="/musik" className={`nav-link ${s.nav__link}`} activeClassName={s.active}>Musik</NavLink>
				</li>
				<li className={s.nav__item}>
					<NavLink to="Settings" className={`nav-link ${s.nav__link}`} activeClassName={s.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;