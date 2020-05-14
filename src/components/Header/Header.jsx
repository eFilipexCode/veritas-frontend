import React, { useState } from 'react';
import './Header.css';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Header(props) {
    const [searchKey, setSearchKey] = useState(props.search);

    const history = useHistory();

    return (
        <div className="header-container">
            <h1 onClick={() => history.push('/')}>Veritas</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                history.push('/search', { searchKey });
            }} className="search-header">
                <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder="Pesquisar..." />
                <button type="submit">
                    <FiSearch color='#fff' size={20} />
                </button>
            </form>
        </div>
    );
};

export default Header;