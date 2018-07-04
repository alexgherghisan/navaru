import { Component } from "react";
import $ from "./style.css";

export default ({ logo }) => (
	<b className={$.nav}>
		<i className={$.logo}>
			<img src={logo} />
		</i>
		<i className={$.nav_items}>
			<i className={$.nav_item}>About</i>
			<i className={$.nav_item}>Services</i>
			<i className={$.nav_item}>Clients</i>
			<i className={$.nav_item}>Portfolio</i>
			<i className={$.nav_item}>Contact</i>
		</i>
	</b>
);
