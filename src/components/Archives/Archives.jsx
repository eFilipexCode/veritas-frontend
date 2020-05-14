import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import api from '../../services/api';
import PostContainerBox from '../PostContainerBox/PostContainerBox';


function Archives() {
    const [archivedPosts, setArchivedPosts] = useState([]);

    useEffect(() => {
        async function getArchivedPosts() {
            const response = await api.get('archives');
            setArchivedPosts([...archivedPosts, ...response.data]);
        };
        getArchivedPosts();
    }, []);

    return (
        <div className="container-archive">
            <Header />
            {
                archivedPosts.map(post => (
                    <PostContainerBox redirectPath='edit' data={post} key={post._id} />
                ))
            }
        </div>
    );
}

export default Archives;