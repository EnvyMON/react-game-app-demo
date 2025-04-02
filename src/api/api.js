import axios from "axios";

const api = axios.create({
    baseURL: "https://api.rawg.io/api", 
    headers: { "Content-Type": "application/json" }, 
    params: {
        key: '2cbea72ca73f4aaa8ad964fba69c917b'
    }
});

export default api;