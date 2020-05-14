import React, { useEffect, useState } from 'react';
import './PostContainerBox.css';
import defaultThumb from '../../assets/default_thumb.jpg';
import { useHistory } from 'react-router-dom';

function PostContainerBox({ data, redirectPath = 'post'}) {
    const [scale, setScale] = useState(0.5);

    useEffect(() => {
        function adjustScale() {
            setTimeout(() => setScale(1), 100);
        };
        adjustScale();
    });

    const history = useHistory();

    return (
        <div onClick={() => history.push('/' + redirectPath, {post: data})} className="post-container-box" style={{transform: `scale(${scale})`}}>
            <div className="category">
                <p>{data.category || 'Outros'}</p>
            </div>
            <div className="thumb-box">
                <div className="color-overlay-thumb"></div>
                <img src={data.thumbPath || defaultThumb} alt="Imagem do Post" />
            </div>
            <div className="info-post">
                <h1>{data.title || ''}</h1>
                <p className="info-desc">{data.description || 'Clique para ler este post.'}</p>
                <p className="info-content">{data.content || ''}</p>
            </div>
        </div>
    );
};

export default PostContainerBox;