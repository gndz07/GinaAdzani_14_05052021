import React from 'react';

export default function SelectForm(props) {
	return (
		<select name={props.name} id={props.name}>
        	{props.data.map((datum, index) => (
        		<option key={index} value={datum}>{datum}</option>
        	))}
        </select>
	)
}