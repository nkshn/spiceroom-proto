import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>This is <b>News Details</b> Page</h1>
      <h4>post title: {post.title}</h4>
      <h4>post text: {post.body}</h4>
      <img src={image.url} />
    </div>
  )
}

export default NewsDetailsPage;