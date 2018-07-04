import { Component } from "react";
import $ from "./style.css";

export default ({ heading, image, video }) => (
	<b className={$.container}>
		<b className={$.video}>
			<video loop autoPlay>
				<source src={video} />
			</video>
			<b className={$.overlay} />
		</b>
		<b className={$.heading}>{heading}</b>
	</b>
);
