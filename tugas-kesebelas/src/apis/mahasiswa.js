import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/v2",
})

export const apis = {
    getAll: () => api.get("/get"),
    getOne: (id) => api.get(`/${id}`),
    create: (data) => api.post("/add", data),
    update: (id, data) => api.put(`/update/${id}`, data),
    delete: (nim) => api.delete(`/delete/${nim}`)
}