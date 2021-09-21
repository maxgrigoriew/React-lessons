import React from "react";
import s from './NavFrends.module.css'
import NavFrend from "./NavFrend/NavFrend";

const NavFrends = (props) => {
	
	let navFrendsItems = props.navFrendsItems.map((item) =>{
		return(
			<NavFrend id = {item.id} name={item.name}   img={item.img}/>
		)
	})
	return (
		<div className="d-flex justify-content-around align-content-center">
			{navFrendsItems}
		</div>
	)
}
export default NavFrends