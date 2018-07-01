import { Component } from "react";
import $ from "./style.css";

class Page extends Component {
	state = {
		angle: 0,
		width: 0,
		height: 0,
	};

	componentDidMount() {
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
		const { angle, width, height } = this.state;

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
						transform: `rotate(${angle}rad)`,
					}}
					onClick={() => this.clickRight()}
				/>
			</b>
		);
	}
}

export default Page;
