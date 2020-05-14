import React, { useState } from 'react';
import './Post.css';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import defaultThumb from '../../assets/default_thumb.jpg';
import Footer from '../Footer/Footer.jsx';

function Post(props) {
    const [data] = useState(props.location.state.post);
    let formatDate = null;

    if (data.date) {
        formatDate = new Intl.DateTimeFormat('pt-BR').format(new Date(data.date));
    };

    document.title = 'Blog - ' + data.title;

    return (
        <div className="full-post-container">
            <Header />
            <div className="info-post">
                <div className="post-thumb">
                    <div className="color-overlay"></div>
                    <img src={data.thumbPath || defaultThumb} alt={data.description || 'Capa do Post'} />
                </div>
                <h1 className="title-post">{data.title}</h1>
                <p className="desc-post">{data.description || ''}</p>
            </div>
            <div className="content">
                <Content content={data.content} />
            </div>
            <div className="pos-post">
                <p>Artigo postado por: {data.author}</p>
                <p>Categoria: {data.category || 'Outros'}</p>
                <p style={data.date ? { display: 'block' } : { display: 'none' }}>Data: {formatDate || '-'}</p>
            </div>
            <Footer />
        </div>
    );
}

export default Post;