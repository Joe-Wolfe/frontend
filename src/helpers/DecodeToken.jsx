import { jwtDecode } from "jwt-decode";


function decodeToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decodedToken = jwtDecode(token);
    return decodedToken;
}

export { decodeToken };