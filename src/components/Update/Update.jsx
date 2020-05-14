import React, { useState, useEffect } from 'react';
import './Update.css';
import verifyAdmLogin from '../../utils/verifyAdmLogin.js';
import FailedScreen from '../FailedScreen/FailedScreen.jsx';
import Header from '../Header/Header.jsx';
import api from '../../services/api.js';
import PostContainerBox from '../PostContainerBox/PostContainerBox.jsx';

function Update() {
    const [adm, setAdm] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
                try {
                    const response = await api.get('posts');
                    setPosts(response.data);
                } catch (error) {
                    alert(error);
                };
        };

        async function verify() {
            const check = await verifyAdmLogin();
            setAdm(check);
            if (check) getPosts();
        };

        verify();
    }, []);

    return (
        <div>
            {adm ?
                <div className="update-container">
                    <Header />
                    <div className="posts-container">
                        {
                            posts.map(post => (
                                <PostContainerBox data={post} key={post._id} redirectPath="edit"/>
                            ))
                        }
                    </div>
                </div>
                : <FailedScreen />}
        </div>
    );
}

export default Update;