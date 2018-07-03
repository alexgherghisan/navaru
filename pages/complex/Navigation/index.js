import { Component } from "react";
import $ from "./style.css";

export default ({ logo }) => (
	<b className={$.nav}>
		<i className={$.logo}>
			<img src={logo} />
		</i>
		<i className={$.nav_item}>1</i>
		<i className={$.nav_item}>2</i>
		<i className={$.nav_item}>3</i>
		<i className={$.nav_item}>4</i>
		<i className={$.nav_item}>5</i>
		<i className={$.nav_item}>6</i>
		<i className={$.nav_item}>7</i>
		<i className={$.nav_item}>8</i>
	</b>
);
