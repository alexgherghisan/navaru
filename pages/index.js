import { Component } from "react";
import $ from "./style.css";

class Page extends Component {
	state = {
		angle: 0,
		width: 0,
		height: 0,
		data: null,
	};

	componentDidMount() {
		fetch("/static/data/home.json")
			.then(reply => reply.json())
			.then(data => this.setState({ data: data }));
		this.calcAngle();
		window.addEventListener("resize", () => this.calcAngle());
	}

	calcAngle() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const angle = Math.atan(height / width); // in radians

		this.setState({
			angle: angle,
			width: width,
			height: height,
		});
	}

	clickLeft() {
		// console.log("left");
	}
	clickRight() {
		// console.log("right");
	}

	render() {
		const { angle, width, height, data } = this.state;

		console.log(data);

		return (
			<b className={$.layout}>
				<b
					className={$.left}
					style={{
						transform: `rotate(${angle}rad)`,
					}}
					onClick={() => this.clickLeft()}
				/>
				<b
					className={$.right}
					style={{
						background: `linear-gradient(${angle}rad, #86c232, #2b2b2b, #86c232)`,
					}}
					onClick={() => this.clickRight()}
				/>
				<b className={$.textleft}>vnihrsdkhj</b>
				<b className={$.textright}>vnihrsdkhj</b>
			</b>
		);
	}
}

export default Page;
