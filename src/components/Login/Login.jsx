import React, { useState } from 'react';
import './Login.css';
import api from '../../services/api.js';
import { useHistory } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try {
            const data = {
                email: user,
                password
            };
            const response = await api.post('login', data);
            localStorage.setItem('blog-adm-id', response.data._id);
            localStorage.setItem('blog-adm-logged', true);
            history.push('/');
        } catch (error) {
            alert('Senha ou email incorretos.');
        };
    };

    return (
        <div className="login-container">
            <div className="input-group">
                <form onSubmit={e => login(e)}>
                    <h1>Bem-vindo.</h1>
                    <input placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} type="text" className="username-input" />
                    <input placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} type="password" className="login-input" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;