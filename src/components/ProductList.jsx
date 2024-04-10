import { ProductCard } from './ProductCard';

export const ProductList = ({ products }) => {
    if (!Array.isArray(products)) {
        return <div>No hay productos disponibles.</div>;
    }

    return (
        <div className='grid'>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};