import $ from "./style.css";

export default ({ heading, items }) => (
	<b className={$.container}>
		<b className={$.heading}>{heading}</b>
		<b className={$.separator} />
		<b className={$.items}>
			{items.map((item, key) => (
				<b className={$.item} key={key}>
					<b className={$.overlay_a} />
					<b className={$.overlay} />

					<b className={$.overlay_d} />
					<b
						className={$.preview}
						style={{
							backgroundImage: `url(${item.image.complex})`,
						}}
					/>
					<b className={$.content}>
						<b className={$.item_heading}>{item.heading}</b>
					</b>
				</b>
			))}
		</b>
	</b>
);
