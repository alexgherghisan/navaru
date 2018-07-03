import Head from "next/head";
import { Component } from "react";
import $ from "./style.css";
import IntroSection from "./IntroSection";
import Navigation from "./Navigation";
class Complex extends Component {
	state = {
		data: null,
		isLoading: true,
	};
	componentDidMount() {
		fetch("/static/data/home.json")
			.then(response => response.json())
			.then(response => {
				this.setState({ data: response, isLoading: false });
			});
	}
	render() {
		const { data, isLoading } = this.state;

		return isLoading ? null : (
			<b className={$.complex}>
				<b className={$.introSection}>
					<IntroSection
						heading={data.introSection.complex.heading}
						image={data.introSection.complex.image}
						video={data.introSection.complex.video}
					/>
				</b>
				<b className={$.navigation}>
					<Navigation logo={data.logo.complex} />
				</b>
			</b>
		);
	}
}
export default Complex;
