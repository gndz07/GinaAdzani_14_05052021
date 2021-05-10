import React from 'react';
import '../styles/page-title.css'

export default function PageTitle(props) {
	return (
		<div className="title">
	        <h1>{props.title}</h1>
	    </div>
	)
}