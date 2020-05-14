import React from 'react';
import './PostContainer.css';
import defaultThumb from '../../assets/default_thumb.jpg';
import { useHistory } from 'react-router-dom';

export default function PostContainer(props) {
    const history = useHistory();
    return (
        <div className="post-container" onClick={() => history.push('/post', {post: props.data})}>
            <div className="thumb">
                <img src={props.data.thumbPath || defaultThumb} alt="Imagem do Post."></img>
            </div>
            <div className="data-container">
                <h1>{props.data.title}</h1>
                <p className="desc">{props.data.description || 'Confira este post do nosso blog.'}</p>
                <div className="content">
                    <p className="content-preview">{props.data.content}</p>
                </div>
            </div>
        </div>
    );
};
