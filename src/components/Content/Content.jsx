import React, { useEffect } from 'react';

function Content(props) {

    useEffect(() => {
        const content = document.querySelector('.paragraph-content');
        content.innerHTML = props.content;
    });

    return (
        <div className="content-container">
            <p className="paragraph-content"></p>
        </div>
    );
}

export default Content;