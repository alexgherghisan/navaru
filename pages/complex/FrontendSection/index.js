import { Component } from "react";
import $ from "./style.css";

export default ({ heading, image, description }) => (
	<b className={$.container} style={{ backgroundImage: `url(${image})` }}>
		<b className={$.to_left}>
			<b className={$.heading}>{heading}</b>
		</b>
		<b className={$.to_right}>
			<b className={$.corner_top_left} />
			<b className={$.corner_bottom_left} />
			<b className={$.overlay} />
			<b className={$.description}>{description}</b>
		</b>
	</b>
);
