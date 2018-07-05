import { Component } from "react";
import $ from "./style.css";

export default ({ heading, image, description }) => (
	<b className={$.container}>
		<b className={$.to_left}>
			<img src={image} />
			<b className={$.overlay} />
			<b className={$.heading}>{heading}</b>
		</b>
		<b className={$.to_right}>
			<b className={$.description}>{description}</b>
		</b>
	</b>
);
