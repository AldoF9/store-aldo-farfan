
import { ProductList } from './components/ProductList';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { useProducts } from './hooks/useProduct';
import { FormikformComponents } from './components/formik/FormikFormComponents';

export const StoreApp = () => {
    const products = useProducts();

    if (products.isFetching) return <Loading />;

    if (products.isError) return <Error error={products.error.message} />;

    return (
        <div className='grid min-h-screen'>
            <div className='col-8'>
                <ProductList products={products.data} />
            </div>
        </div>
    );
};