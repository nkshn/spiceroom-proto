import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RedirectingTo.css';

function RedirectingTo(props) {
  return (
    <Link to={props.linkTo} className="backwards-link" >
      <p>&lt; Повернутися назад</p>
    </Link>
  )
}

RedirectingTo.propTypes = {
  linkTo: PropTypes.string.isRequired,
}

export default RedirectingTo; 