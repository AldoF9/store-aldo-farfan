import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export const ProductCard = ({ product }) => {
    return (
        <div className='card col'>
            <Card title={product.nombre} className='w-25rem'>
            </Card>
        </div>
    );
};