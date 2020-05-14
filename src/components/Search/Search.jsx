import React, { useState, useEffect } from 'react';
import './Search.css';
import Header from '../Header/Header.jsx';
import PostContainer from '../PostContainer/PostsContainer.jsx';
import api from '../../services/api.js';
import loadingGif from '../../assets/loading.gif';
import Footer from '../Footer/Footer.jsx';

function Search(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  document.title = 'Resultados de pesquisa para: ' + props.location.state.searchKey;

  useEffect(() => {
    setLoading(true);
      api.get(`search?value=${props.location.state.searchKey}`)
        .then(res => {console.log(res.data); return res})
        .then(res => setPosts(res.data))
        .then(() => setLoading(false));
  }, [props.location.state.searchKey]);

  return (
    <div className="search-container">
      <Header search={props.location.state.searchKey}/>
      <h1 className="title-search">Resultados de pesquisa para: <strong>{props.location.state.searchKey}</strong></h1>
      <div className="content-search">
        {
          loading ? 
          <img src={loadingGif} className="loading-gif" alt="Carregando posts..." />
          : posts.map(post => (
            <PostContainer data={post} key={post._id} />
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Search;