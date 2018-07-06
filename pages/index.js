import { Component } from "react";
import { STATIC } from "~/playground.js";
import Simple from "./Simple";
import $ from "./style.css";

class Page extends Component {
	state = {
		data: null,
		isSimpleVisible: false,
		isComplexVisible: false,
		isLoading: false,
	};

	componentDidMount() {
		fetch(`${STATIC}/data/home.json`)
			.then(response => response.json())
			.then(response => {
				this.setState({
					data: response,
					isLoading: false,
				});
			});
	}

	animate() {
		const animations = document.querySelectorAll(".animate");
		for (const animation of animations) {
			animation.beginElement();
		}
	}

	animateBack() {
		const animations = document.querySelectorAll(".animate_back");
		for (const animation of animations) {
			animation.beginElement();
		}
	}

	clickLeft() {
		this.animate();

		this.setState({ isSimpleVisible: true, isComplexVisible: false });
	}

	clickRight() {
		this.animate();

		this.setState({ isSimpleVisible: false, isComplexVisible: true });
	}

	clickBack() {
		this.animateBack();

		this.setState({ isSimpleVisible: false, isComplexVisible: false });
	}

	clickToSwitch() {
		this.animateBack();

		const isSimpleVisible = this.state.isSimpleVisible;
		const isComplexVisible = this.state.isComplexVisible;

		this.setState({ isSimpleVisible: false, isComplexVisible: false });

		setTimeout(() => {
			this.animate();

			this.setState({
				isSimpleVisible: !isSimpleVisible,
				isComplexVisible: !isComplexVisible,
			});
		}, 500);
	}

	render() {
		const {
			data,
			isLoading,
			isSimpleVisible,
			isComplexVisible,
		} = this.state;

		return (
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
							<stop stopColor="#222629" offset="0%" />
							<stop stopColor="#86c232" offset="60%" />
						</linearGradient>

						<linearGradient
							id="grad_simple"
							gradientTransform="rotate(135)"
						>
							<stop stopColor="#ED7456" offset="0%" />
							<stop stopColor="#EC547B" offset="20%" />
						</linearGradient>

						<polygon
							id="light"
							points="0 0, 100 100, 0 100"
							fill="url(#grad_simple)"
							onClick={() => this.clickLeft()}
						>
							<animate
								fill="freeze"
								className="animate to_bottom"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="0 0, 0 0, 0 0"
							/>
							<animate
								fill="freeze"
								className="animate_back to_bottom"
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
								className="animate to_top"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="100 100, 100 100, 100 100"
							/>
							<animate
								fill="freeze"
								className="animate_back to_top"
								begin="indefinite"
								attributeName="points"
								dur="300ms"
								to="0 0, 100 0, 100 100"
							/>
						</polygon>
					</svg>
				</b>
				<b className={isSimpleVisible ? $.simple : $.hidden}>
					<b
						className={$.back_simple}
						onClick={() => this.clickToSwitch()}
					>
						see complex
					</b>
					{isSimpleVisible ? (
						<Simple
							data={data}
							onClickBack={() => this.clickBack()}
						/>
					) : null}
				</b>
				<b className={isComplexVisible ? $.complex : $.hidden}>
					<b
						className={$.back_complex}
						onClick={() => this.clickToSwitch()}
					>
						see simple
					</b>
				</b>
			</b>
		);
	}
}

export default Page;
