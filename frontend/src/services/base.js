import axios from "../utils/http";


class BaseService {
    constructor(url_prefix) {
        this.url_prefix = url_prefix;
    }

    getAll() {
        return axios.get(`/${this.url_prefix}`);
    }

    get(id) {
        return axios.get(`/${this.url_prefix}/${id}`);
    }

    create(data) {
        return axios.post(`/${this.url_prefix}`, data);
    }
    
    update(id, data) {
        return axios.put(`/${this.url_prefix}/${id}`, data);
    }

    delete(id) {
        return axios.delete(`/${this.url_prefix}/${id}`);
    }
}

export default BaseService;