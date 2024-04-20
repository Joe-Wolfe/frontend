import { jwtDecode } from "jwt-decode";


function decodeToken() {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    return decodedToken;
}

export { decodeToken };