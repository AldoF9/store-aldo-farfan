import { ProgressSpinner } from 'primereact/progressspinner';

export const Loading = () => {
    return (
        <div className='card flex justify-content-center align-items-center min-h-screen'>
            <ProgressSpinner />
        </div>
    );
};