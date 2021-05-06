import React from 'react';
import '../styles/page-title.css'

export default class PageTitle extends React.Component {
	render() {
		return (
			<div className="title">
	            <h1>{this.props.title}</h1>
	        </div>
		)
	}
}