import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

function Badge(props) {

  let BadgeRanderedComponent;

  if (props.number === 0) {
    BadgeRanderedComponent = null;
  } else if (props.number > 9) {
    BadgeRanderedComponent = <div className="badge-div"><p>9+</p></div>
  } else if (props.number >= 1) {
    BadgeRanderedComponent = <div className="badge-div"><p>{props.number}</p></div>
  }
  return (
    <>
      {BadgeRanderedComponent}
    </>
  )
}

Badge.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Badge;