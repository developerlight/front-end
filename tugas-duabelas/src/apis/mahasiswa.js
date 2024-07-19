import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/mahasiswa",
})

export const apis = {
    getAll: () => api.get("/get", { withCredentials: true }),
    getOne: (id) => api.get(`/${id}`, { withCredentials: true }),
    create: (data) => api.post("/add", data, { withCredentials: true }),
    update: (id, data) => api.put(`/update/${id}`, data, { withCredentials: true }),
    delete: (nim) => api.delete(`/delete/${nim}`, { withCredentials: true }),
}