import $ from "./style.css";

export default ({ image }) => (
	<i className={$.logo}>
		<img src={image} />
	</i>
);
