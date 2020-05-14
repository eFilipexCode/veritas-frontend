import React from 'react';
import './MorePosts.css';


function MorePosts({Element, posts}) {
    return (
        <div className="more-posts-container" style={{display: 'flex'}}>
            {posts.map(post => (
                <Element data={post} key={post._id} />
            ))}
        </div>
    );
};

export default MorePosts;