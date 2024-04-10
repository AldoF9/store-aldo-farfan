import axios from 'axios';

export const productsApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

export const getProducts = async() => {
    const {data} = await productsApi.get('api/companies/all');
    return data
}

export const getGames = async() => {
    const {data} = await productsApi.get('api/games/all');
    return data
}