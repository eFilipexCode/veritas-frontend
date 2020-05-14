import api from '../services/api.js';

async function verifyAdmLogin() {
    const admId = localStorage.getItem('blog-adm-id');
    const response = await api.get('/admin?id=' + admId);
    if (response) {
        return true;
    } else if (!response) {
        return false;
    };
};

export default verifyAdmLogin;