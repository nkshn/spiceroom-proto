import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import { Link } from 'react-router-dom';
import './NewsListPage.css';

function NewsListPage() {

  let fetchLimit = 5;

  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [isAlreadyLoaded, setIsAlreadyLoaded] = useState(false);

  useEffect(() => {
    fetchingItems();
  }, []);

  const fetchingItems = async () => {
    const dataPost = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + fetchLimit);
    const dataPhotos = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=' + fetchLimit);

    const formatedPosts = await dataPost.json();
    const formatedImages = await dataPhotos.json();

    setPosts(formatedPosts);
    setImages(formatedImages);
    setTimeout(() => {
      setIsAlreadyLoaded(true);
    }, 3000) // imitation off slow fetching data from server
  }

  let arrayOfImagesOnlyWithThumbnailUrl = images.map(({ thumbnailUrl }) => thumbnailUrl);

  return (
    <div className="container">
      <p className="header-title">News</p>
      {
        posts.map((item, index) => (
          <Link key={index} to={`/news/${item.id}`} className="news-link">
            <NewsItem
              title={item.title}
              text={item.body}
              imgSrc={arrayOfImagesOnlyWithThumbnailUrl[item.id - 1]}
              isAlreadyLoaded={isAlreadyLoaded}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default NewsListPage;