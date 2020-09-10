import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

function Label(props) {
  return (
    <label className="label-text">{props.text}</label>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Label; 