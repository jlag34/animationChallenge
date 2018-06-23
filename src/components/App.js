import React, { Component } from 'react';
import Navbar from './Navbar';

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
				<Navbar activeNav={active} handleActive={this.handleActive} headers={navTitles} />
			</div>
		);
	}
}

export default App;