import React from 'react';
import './Quote.css';

function Quote(props) {
    return (
        <div className="quote-container">
            <div className="quote">
                <p>{props.quote}</p>
            </div>
            <div className="author">
                <p>{props.author}</p>
            </div>
        </div>
    );
}

export default Quote;