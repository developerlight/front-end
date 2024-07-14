import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:5000'
})

const apis = {
    getAllMahasiswa : () => api.get('/v2/get'),
    getMahasiswaByNim : (nim) => api.get(`/v2/${nim}`),
}

export default apis