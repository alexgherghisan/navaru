import Head from "next/head";
import { Component } from "react";
import $ from "./style.css";
import IntroSection from "./IntroSection";
import Navigation from "./Navigation";
import BeginningSection from "./BeginningSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
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
				<b className={$.intro_section}>
					<IntroSection
						heading={data.introSection.complex.heading}
						image={data.introSection.complex.image}
						video={data.introSection.complex.video}
					/>
				</b>
				<b className={$.navigation}>
					<Navigation logo={data.logo.complex} />
				</b>
				<b className={$.beginning_section}>
					<BeginningSection
						heading={data.beginningSection.heading}
						image={data.beginningSection.image.complex}
						description={data.beginningSection.description}
					/>
				</b>
				<b className={$.beginning_section}>
					<AboutSection
						heading={data.aboutSection.heading}
						subheading={data.aboutSection.subheading}
						image={data.aboutSection.image.complex}
						description={data.aboutSection.description}
					/>
				</b>
				<b className={$.Services_section}>
					<ServicesSection
						heading={data.servicesSection.heading}
						items={data.servicesSection.items}
						image={data.servicesSection.image}
					/>
				</b>
			</b>
		);
	}
}
export default Complex;
