import axios from 'axios';
import { decodeToken } from './helpers/DecodeToken';


const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001'
});

async function getCompanies() {
    const res = await api.get('/companies');
    return res.data.companies;
}

async function searchCompanies(searchTerm) {
    const res = await api.get(`/companies?name=${searchTerm}`);
    return res.data.companies;
}

async function getCompany(handle) {
    const res = await api.get(`/companies/${handle}`);
    return res.data.company;
}


async function getJobs() {
    const res = await api.get('/jobs');
    return res.data.jobs;
}

async function searchJobs(searchTerm) {
    const res = await api.get(`/jobs?title=${searchTerm}`);
    return res.data.jobs;
}



async function register(data, setUser) {
    try {
        const res = await api.post('/auth/register', data);
        localStorage.setItem('token', res.data.token);
        setUser({ token: res.data.token });
        return { success: true, token: res.data.token };
    }
    catch (e) {
        const errorMessage = e.response.data.error.message;
        return { success: false, error: errorMessage };
    }
}

async function signIn(data, setUser) {
    try {
        const res = await api.post('/auth/token', data);
        localStorage.setItem('token', res.data.token);
        setUser({ token: res.data.token });

        return { success: true, token: res.data.token };
    }
    catch (e) {
        const errorMessage = e.response ? e.response.data.error.message : e.message;
        return { success: false, error: errorMessage };
    }
}

async function findUser(username) {
    const decodedToken = decodeToken();
    if (!decodedToken) return null;
    const name = username || decodedToken.username;
    const res = await api.get(`/users/${name}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return res.data.user;
}

async function updateUser(data) {
    try {
        const res = await api.patch('/user', data);
        return { success: true };
    }
    catch (e) {
        const errorMessage = e.response.data.error.message;
        return { success: false, error: errorMessage };
    }
}

async function apply(jobId) {
    try {
        const res = await api.post(`/jobs/${jobId}/apply`);
        return { success: true };
    }
    catch (e) {
        const errorMessage = e.response.data.error.message;
        return { success: false, error: errorMessage };
    }
}

export { getCompanies, getJobs, register, signIn, searchCompanies, searchJobs, findUser, updateUser, getCompany, apply };