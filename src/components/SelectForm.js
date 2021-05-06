import React from 'react';

export default class SelectForm extends React.Component {
	render() {
		return (
			<select name={this.props.name} id={this.props.name}>
	        	{this.props.data.map((datum, index) => (
	        		<option key={index} value={datum}>{datum}</option>
	        	))}
	        </select>
		)
	}
}