import React from 'react';
import PropTypes from 'prop-types';
import './NewsItem.css';
import Skeleton from 'react-loading-skeleton';

function NewsItem(props) {
  return (
    <div className="news-main_container">
      {props.isAlreadyLoaded === false
        ? <Skeleton width={150} height={150} />
        : <img src={props.imgSrc} className="news-image" alt="description" />}
      <div className="news-text_container">
        <p className="news-title">
          {props.isAlreadyLoaded === false ? <Skeleton /> : props.title}
        </p>
        <p className="news-text">
          {props.isAlreadyLoaded === false ? <Skeleton count={3} /> : props.text}
        </p>
      </div>
    </div>
  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  isAlreadyLoaded: PropTypes.bool,
}

export default NewsItem;