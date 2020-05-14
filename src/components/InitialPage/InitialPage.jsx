import React, { useEffect, useState } from 'react';
import './InitialPage.css';
import Header from '../Header/Header.jsx';
import Banner from '../Banner/Banner.jsx';
import BannerRight from '../BannerRight/BannerRight.jsx';
import api from '../../services/api.js';
import PostsContainer from '../PostContainer/PostsContainer.jsx';
import loading from '../../assets/loading.gif';
import PostContainerBox from '../PostContainerBox/PostContainerBox.jsx';
import MorePosts from '../MorePosts/MorePosts.jsx';
import Footer from '../Footer/Footer.jsx';

export default function InitialPage() {
  const [posts, setPosts] = useState([]);
  const [initialPost, setInitialPost] = useState([]);
  const [loaded, setLoaded] = useState(false);

  document.title = 'Veritas';

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get('session');
        setPosts(p => ([...posts, ...response.data]));
        setLoaded(true);
      } catch (error) {
        alert(error);
      };
    };

    async function getInitialPosts() {
      try {
        const response = await api.get('home');
        setInitialPost([...initialPost, ...response.data]);
      } catch (error) {
        alert(error)
      };
    };

    getInitialPosts();
    getPosts();
  }, []);

  return (
    <div className="initial-container">
      <Header />
      <Banner />
      <section className="main-posts">
        <div className="initial-posts">
          {
            loaded ? initialPost.map(post => (
              <PostsContainer data={post} key={post._id}/>
            )) :
              <img src={loading} className="loading-gif" alt="Carregando posts..." />
          }
        </div>
        <BannerRight />
      </section>
      <section className="grid-posts">
        <h1 className="title">Mais Posts</h1>
        <div className="more-posts">
          <MorePosts posts={posts} Element={PostContainerBox} />
        </div>
      </section>
      <Footer />
    </div>
  );
};
