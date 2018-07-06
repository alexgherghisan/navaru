import { Component } from "react";
import { STATIC } from "~/playground.js";
import $ from "./style.css";
import Logo from "./Logo";

class Navigation extends Component {
	state = {
		data: null,
		isLoading: true,
		items: null,
		activeIndex: null,
		hoverIndex: null,
	};

	componentDidMount() {
		fetch(`${STATIC}/data/home.json`)
			.then(response => response.json())
			.then(response =>
				this.setState({
					data: response,
					items: response.menu,
					activeIndex: 0,
					isLoading: false,
				})
			);
	}

	handleClick(key) {
		this.setState({ activeIndex: key });
		const { onSelect } = this.props;

		if (typeof onSelect === "function") onSelect(this.state.items[key].ref);
	}

	handleHover(key) {
		this.setState({ hoverIndex: key });
	}

	render() {
		const { isLoading, items, activeIndex, hoverIndex, data } = this.state;

		return isLoading ? null : (
			<b className={$.nav}>
				<Logo image={data.logo.complex} />
				<i className={$.nav_items}>
					{items.map((item, key) => (
						<i
							key={key}
							ref={item.ref}
							style={{ backgroundImage: `url(${item.image})` }}
							className={
								activeIndex == key
									? $.nav_item_active
									: hoverIndex == key
										? $.nav_item_hover
										: $.nav_item
							}
							onClick={() => this.handleClick(key)}
							onMouseEnter={() => this.handleHover(key)}
							onMouseLeave={() => this.handleHover(null)}
						>
							<i className={$.index}>{key + 1}</i>
							<i className={$.text}>{item.name}</i>
						</i>
					))}
				</i>
			</b>
		);
	}
}

export default Navigation;
