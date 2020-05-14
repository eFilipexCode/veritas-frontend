import React, { useEffect, useState } from 'react';
import imagesUrl from '../../utils/imagesUrl.js';
import utils from '../../utils/utils.js';
import api from '../../services/api.js';
import './BannerRight.css';

function BannerRight() {
    const [thumb, setThumb] = useState('');
    const [pray, setPray] = useState({});

    useEffect(() => {
        function getThumb() {
            const url = utils.getRandomIndex(imagesUrl);
            setThumb(url);
        };
        async function getPrayers() {
            try {
                const response = await api.get('https://catholic-prayers-backend.herokuapp.com/prayers');
                const randomPray = utils.getRandomIndex(response.data);
                setPray(randomPray);
            } catch (err) {
                alert(err);
            };
        };
        getPrayers();
        getThumb();
    }, []);

    return (
        <aside className="banner-right">
            <div className="pray-container">
                <h1>Oração do Acesso</h1>
                <h2>{pray.title}</h2>
                <p className="pray">
                    {pray.content}
                </p>
                <p className="redireact-catholic-prayers">Acesse: <a style={{ color: '#c0392b' }} rel="noopener noreferrer" href="https://catholicprayers.netlify.app/" target="_blank">Catholic Prayers</a></p>
            </div>
            <img src={thumb} alt="Oração do acesso" />
        </aside>
    );
}

export default BannerRight;