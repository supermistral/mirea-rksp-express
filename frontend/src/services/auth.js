import axios from "../utils/http";


class AuthService {
    async login(data) {
        return axios.post("/auth/login", data)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token;
                return res;
            });
    }

    signup(data) {
        return axios.post("/auth/signup", data);
    }
}


const authService = new AuthService();

export default authService;
