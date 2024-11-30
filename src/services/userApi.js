import axios from 'axios';

const API_URL = "https://reqres.in/api";


const apiCLient = axios.create({
    baseURL: API_URL,
})


export const registerUser = async(userData) => {
    try {
        const { data } = await apiCLient.post('/register', userData)
        return data //Devuelve el id y token
    } catch (error) {
        throw new Error(`No pudimos registrar al usuario. ${error}`)
    }
}


//JSDocs

/**
 * Esta función recibe unas credenciales como objeto y me retorna un token desde el llamado a la API de autenticación
 * @param {object} credentials 
 * @returns {string} - Retorna el Token
 */


export const authenticate = async(credentials) => {
    try {
        const { data } = await apiCLient.post('/login', credentials)
        return data //Vuelve solo el token
    } catch (error) {
        throw new Error(`Credenciales Invalidas. ${error}`);
    }
}