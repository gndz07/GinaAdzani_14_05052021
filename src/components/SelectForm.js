import React from 'react';
import PropTypes from 'prop-types';

export default function SelectForm(props) {
	return (
		<select name={props.name} id={props.name} value={props.value} onChange={props.onChange}>
        	{props.data.map((datum, index) => (
        		<option key={index} value={datum}>{datum}</option>
        	))}
        </select>
	)
};

SelectForm.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}