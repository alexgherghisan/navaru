import { Component } from "react";
import Logo from "./Logo";
import IntroSection from "./IntroSection";
import $ from "./style.css";

class Simple extends Component {
	state = {
		data: null,
		isLoading: true,
	};

	componentDidMount() {
		fetch("/static/data/home.json")
			.then(reply => reply.json())
			.then(response => {
				this.setState({ data: response, isLoading: false });
			});
	}

	render() {
		const { data, isLoading } = this.state;
		return isLoading ? null : (
			<b className={$.container}>
				<b className={$.logo}>
					<Logo image={data.logo.simple} />
				</b>
				<b className={$.intro_section}>
					<IntroSection
						image={data.introSection.simple.image}
						heading={data.introSection.simple.heading}
					/>
				</b>
			</b>
		);
	}
}

export default Simple;
