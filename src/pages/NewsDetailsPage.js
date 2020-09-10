import React, { useState, useEffect } from 'react';
import RedirectingTo from '../components/RedirectingTo';
import './NewsDetailsPage.css';

function NewsDetailsPage({ match }) {
  const [post, setPosts] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const dataPost = await fetch('https://jsonplaceholder.typicode.com/posts/' + match.params.id);
    const dataImage = await fetch('https://jsonplaceholder.typicode.com/photos/' + match.params.id);

    const formatedPost = await dataPost.json();
    const formatedImage = await dataImage.json();

    setPosts(formatedPost);
    setImage(formatedImage);
  };

  return (
    <div className="container news-details_container">
      <RedirectingTo linkTo="/news" />
      <h4 className="news-details_title">{post.title}</h4>
      <img src={image.url} className="news-details_img" alt="description" />
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
      <h4 className="news-details_text">{post.body}</h4>
    </div>
  )
}

export default NewsDetailsPage;