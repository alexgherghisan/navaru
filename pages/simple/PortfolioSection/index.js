import $ from "./style.css";

export default ({ heading }) => (
	<b className={$.container}>
		<i className={$.heading}>{heading}</i>
		{/*<b className={$.items}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b
						className={$.blur}
						style={{ backgroundImage: `url(${item.icon.simple})` }}
					/>
					<b className={$.content}>
						<b className={$.item_heading}>{item.heading}</b>
						<b className={$.item_subheading}>{item.subheading}</b>
					</b>
				</b>
			))}
		</b>*/}
	</b>
);
