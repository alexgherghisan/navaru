import { Component } from "react";
import Logo from "./Logo";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import BeginningSection from "./BeginningSection";
import ServicesSection from "./ServicesSection";
import ClientsSection from "./ClientsSection";
import PortfolioSection from "./PortfolioSection";
import WebSection from "./WebSection";
import FrontendSection from "./FrontendSection";
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
				<b className={$.about_section}>
					<AboutSection
						heading={data.aboutSection.heading}
						subheading={data.aboutSection.subheading}
						description={data.aboutSection.description}
						image={data.aboutSection.image.simple}
					/>
				</b>
				<b className={$.beginning_section}>
					<BeginningSection
						heading={data.beginningSection.heading}
						description={data.beginningSection.description}
						image={data.beginningSection.image.simple}
					/>
				</b>
				<b className={$.services_section}>
					<ServicesSection
						heading={data.servicesSection.heading}
						items={data.servicesSection.items}
					/>
				</b>
				<b className={$.clients_section}>
					<ClientsSection
						heading={data.clientsSection.heading}
						image={data.clientsSection.image.simple}
						description={data.clientsSection.description}
					/>
				</b>
				<b className={$.portfolio_section}>
					<PortfolioSection heading={data.portfolioSection.heading} />
				</b>
				<b className={$.web_section}>
					<WebSection
						heading={data.webSection.heading}
						image={data.webSection.image.simple}
						description={data.webSection.description}
					/>
				</b>
				<b className={$.frontend_section}>
					<FrontendSection
						heading={data.frontendSection.heading}
						image={data.frontendSection.image.simple}
						description={data.frontendSection.description}
					/>
				</b>
			</b>
		);
	}
}

export default Simple;
