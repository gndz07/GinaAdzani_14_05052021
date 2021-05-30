import React from 'react';
import '../styles/page-title.css';
import PropTypes from 'prop-types';


export default function PageTitle(props) {
	return (
		<div className="title">
	        <h1>{props.title}</h1>
	    </div>
	)
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}