import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link, useHistory } from 'react-router-dom';
import { FiKey, FiArchive, FiRotateCcw, FiPlus, FiLogOut } from 'react-icons/fi';
import verifyAdmLogin from '../../utils/verifyAdmLogin';

function Footer() {
    const [logged, setLogged] = useState(false);

    const history = useHistory();
    function logout() {
        localStorage.clear();
        setLogged(false);
        history.push('/');
    };

    useEffect(() => {
        async function verifyLogin() {
            const logged = await verifyAdmLogin();
            setLogged(logged);
        };
        verifyLogin();
    }, []);

    return (
        <div className="footer-container">
            <h1>Veritas</h1>
            <div className="copyright">
                Copyright &copy; 2020 Veritas
          </div>
            {
                logged
                    ?
                    <div className="options-adm">
                        <Link title="Rascunhos" to="/archives">
                            <FiArchive size={20} color='#eee' />
                        </Link>
                        <Link title="Atualizar posts" to="/update">
                            <FiRotateCcw size={20} color='#eee' />
                        </Link>
                        <Link title="Novo Post" to="/new">
                            <FiPlus color="#eee" size={20} />
                        </Link>
                        <FiLogOut style={{ cursor: 'pointer' }} onClick={() => logout()} color="#eee" size={20} />
                    </div>
                    :
                    <div className="link-login">
                        <Link to="/login" style={{ margin: '30px 0px' }} >
                            <FiKey color="#eee" size={20} />
                        </Link>
                    </div>
            }
        </div>
    );
}

export default Footer;