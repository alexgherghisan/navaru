import { Component } from "react";
import { STATIC } from "~/playground.js";
import IntroSection from "./IntroSection";
import Navigation from "./Navigation";
import BeginningSection from "./BeginningSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./ClientsSection";
import PortfolioSection from "./PortfolioSection";
import WebSection from "./WebSection";
import FrontendSection from "./FrontendSection";
import $ from "./style.css";

class Complex extends Component {
	state = {
		data: null,
		isLoading: true,
	};

	componentDidMount() {
		fetch(`${STATIC}/data/home.json`)
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
					<Navigation onSelect={ref => this.handleScroll(ref)} />
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
				<b className={$.Clients_section}>
					<ClientsSection
						heading={data.clientsSection.heading}
						image={data.clientsSection.image.complex}
						description={data.clientsSection.description}
					/>
				</b>
				<b className={$.Portfolio_section}>
					<PortfolioSection
						heading={data.portfolioSection.heading}
						items={data.portfolioSection.items}
					/>
				</b>
				<b className={$.Web_section}>
					<WebSection
						heading={data.webSection.heading}
						image={data.webSection.image.complex}
						description={data.webSection.description}
					/>
				</b>
				<b className={$.Frontend_section}>
					<FrontendSection
						heading={data.frontendSection.heading}
						image={data.frontendSection.image.complex}
						description={data.frontendSection.description}
					/>
				</b>
			</b>
		);
	}
}
export default Complex;
