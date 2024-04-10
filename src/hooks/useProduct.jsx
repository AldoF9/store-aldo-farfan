import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/productsApi';

export const useProducts = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getProducts,
    });
};