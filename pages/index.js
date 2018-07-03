import { Component } from "react";
import Simple from "./Simple";
import $ from "./style.css";

class Page extends Component {
	state = {
		angle: 0,
		width: 0,
		height: 0,
		data: null,
		isSimpleVisible: false,
		isComplexVisible: false,
		isLoading: false,
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
		const animations = document.querySelectorAll(".animate");
		for (const animation of animations) {
			animation.beginElement();
		}

		/*Router.push({
			pathname: "/simple",
		});*/

		this.setState({ isSimpleVisible: true, isComplexVisible: false });
	}
	clickRight() {
		const animations = document.querySelectorAll(".animate");
		for (const animation of animations) {
			animation.beginElement();
		}

		/*Router.push({
			pathname: "/complex",
		});*/

		this.setState({ isSimpleVisible: false, isComplexVisible: true });
	}

	clickBack() {
		const animations = document.querySelectorAll(".animate_back");
		for (const animation of animations) {
			animation.beginElement();
		}

		const isSimpleVisible = this.state.isSimpleVisible;
		const isComplexVisible = this.state.isComplexVisible;

		this.setState({ isSimpleVisible: false, isComplexVisible: false });

		setTimeout(() => {
			const animations = document.querySelectorAll(".animate");
			for (const animation of animations) {
				animation.beginElement();
			}

			this.setState({
				isSimpleVisible: !isSimpleVisible,
				isComplexVisible: !isComplexVisible,
			});
		}, 500);
	}

	render() {
		const {
			angle,
			width,
			height,
			data,
			isSimpleVisible,
			isComplexVisible,
		} = this.state;

		return (
			/*<b className={$.layout}>
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
			</b>*/
			<b className={$.layout}>
				<b className={$.container}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<linearGradient
							id="grad_complex"
							gradientTransform="rotate(-45)"
						>
							<stop stop-color="#222629" offset="0%" />
							<stop stop-color="#86c232" offset="60%" />
						</linearGradient>

						<linearGradient
							id="grad_simple"
							gradientTransform="rotate(135)"
						>
							<stop stop-color="#ED7456" offset="0%" />
							<stop stop-color="#EC547B" offset="20%" />
						</linearGradient>

						<polygon
							id="light"
							points="0 0, 100 100, 0 100"
							fill="url(#grad_simple)"
							onClick={() => this.clickLeft()}
						>
							<animate
								fill="freeze"
								class="animate to_bottom"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="0 0, 0 0, 0 0"
							/>
							<animate
								fill="freeze"
								class="animate_back to_bottom"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="0 0, 100 100, 0 100"
							/>
						</polygon>
						<polygon
							id="dark"
							fill="url(#grad_complex)"
							points="0 0, 100 0, 100 100"
							onClick={() => this.clickRight()}
						>
							<animate
								fill="freeze"
								class="animate to_top"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="100 100, 100 100, 100 100"
							/>
							<animate
								fill="freeze"
								class="animate_back to_top"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="0 0, 100 0, 100 100"
							/>
						</polygon>
					</svg>
				</b>
				<b className={isSimpleVisible ? $.simple : $.hidden}>
					<b className={$.back} onClick={() => this.clickBack()}>
						try complex one
					</b>
					<Simple />
				</b>
				<b className={isComplexVisible ? $.complex : $.hidden}>
					<b className={$.back} onClick={() => this.clickBack()}>
						try simple one
					</b>
					{/*<Complex />*/}
				</b>
			</b>
		);
	}
}

export default Page;
