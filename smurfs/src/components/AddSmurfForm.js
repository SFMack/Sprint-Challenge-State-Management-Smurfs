import React, { Component } from 'react';
import axios from 'axios';

export default class AddSmurfForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: 0,
			height: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);

		axios
			.post('http://localhost:3333/smurfs', {
				name: this.state.name,
				age: this.state.age,
				height: this.state.height
			})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		console.log(this.state);

		return (
			<form onSubmit={this.handleSubmit}>
				<label>Name</label>
				<input
					type='text'
					name='name'
					placeholder='Name your smurf'
					onChange={this.handleChange}
					value={this.state.name}
				/>

				<label>Age</label>
				<input
					type='text'
					name='age'
					placeholder='How old is your smurf?'
					onChange={this.handleChange}
					value={this.state.age}
				/>

				<label>Height</label>
				<input
					type='text'
					name='height'
					placeholder='How tall is your smurf?'
					onChange={this.handleChange}
					value={this.state.height}
				/>
				<input type='submit' />
			</form>
		);
	}
}
