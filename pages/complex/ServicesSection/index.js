import { Component } from "react";
import $ from "./style.css";

export default ({ heading, items, image }) => (
	<b className={$.container}>
		<b className={$.to_left}>
			<i className={$.items}>
				{items.map((item, key) => (
					<i className={$.item} key={key}>
						<i className={$.service}>
							<img src={item.icon.complex} />
						</i>
						<i className={$.content}>
							<i className={$.item_heading}>{item.heading}</i>
							<i className={$.item_subheading}>
								{item.subheading}
							</i>
						</i>
					</i>
				))}
			</i>
		</b>
		<b className={$.to_right}>
			<img src={image} />
			<b className={$.overlay} />
		</b>
	</b>
);
