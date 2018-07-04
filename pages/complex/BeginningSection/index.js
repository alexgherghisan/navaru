import { Component } from "react";
import $ from "./style.css";

export default ({ heading, image, description }) => (
	<b className={$.container}>
		<img src={image} className={$.beginning_section_img} />
		<b className={$.overlay} />
		<b className={$.heading}>{heading}</b>
		<b className={$.separator} />
		<b className={$.description}>{description}</b>
	</b>
);
