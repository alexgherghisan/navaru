import { Component } from "react";
import $ from "./style.css";

export default ({ heading, items, image }) => (
	<b className={$.container} style={{ backgroundImage: `url(${image})` }}>
		<b className={$.to_left}>
			<i className={$.items}>
				<b className={$.corner_top_right} />
				<b className={$.corner_bottom_right} />
				<b className={$.overlay} />
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
			<b className={$.heading}>{heading}</b>
		</b>
	</b>
);
