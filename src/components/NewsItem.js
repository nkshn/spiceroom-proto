import React from 'react';
import PropTypes from 'prop-types';
import './NewsItem.css';

function NewsItem(props) {
  return (
    <div className="news-main_container">
      <img src={props.imgSrc} className="news-image" />
      <div className="news-text_container">
        <p className="news-title">{props.title}</p>
        <p className="news-text">{props.text}</p>
      </div>
    </div>
  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
}

export default NewsItem;