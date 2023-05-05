import axios from "axios";

const server = axios.create({
    baseURL: "https://code-night-form.azurewebsites.net",
    withCredentials: true,
});


export const applicationCreate = (newApplication) => server.post("/newApplication", newApplication);