import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { active: 'Audiences' };

		this.handleActive = this.handleActive.bind(this);
	}

	handleActive(active) {
		this.setState({ active });
	}

	render() {
		const { active } = this.state;
		const navTitles = ['Audiences', 'Partners', 'Brands'];

		return (
			<div>
				{/* CSS Transition is only used for the mounting of the component */}
				<CSSTransition
					in
					classNames="fade"
					appear={true}
					timeout={500}
				>
					<div className="navbar-wrapper">
						{navTitles.map(title => {
							// CSS transitions used for state changes
							const isHighlighted = active === title ? 'active' : 'inactive';
							return (
								<div
									className={isHighlighted}
									key={title}
									onClick={() => this.handleActive(title)}
								>
									{title}
								</div>
							);
						})}
					</div>
				</CSSTransition>
			</div>
		);
	}
}

export default App;