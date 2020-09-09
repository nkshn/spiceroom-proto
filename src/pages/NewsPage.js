import React, { useState, useEffect } from 'react'

function NewsPage() {

  let fetchLimit = 5;

  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchingItems()
  }, []);

  const fetchingItems = async () => {
    const dataPost = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + fetchLimit);
    const dataPhotos = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=' + fetchLimit);

    const posts = await dataPost.json();
    const images = await dataPhotos.json();

    console.log(posts);
    console.log(images);

    setPosts(posts);
    setImages(images);
  }
  let arrayOfImagesOnlyThumbnailUrl = images.map(({ thumbnailUrl }) => thumbnailUrl)
  return (
    <>
      <p>This is <b>News</b> page</p>
      <div style={{ textAlign: "left", marginBottom: 20 }}>
        {
          posts.map((item, index) => (
            <div key={item.id}>
              <p><b>#{item.id}</b> - {item.title}</p>
              <p>{item.body}</p>
              <img src={arrayOfImagesOnlyThumbnailUrl[index]} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default NewsPage;