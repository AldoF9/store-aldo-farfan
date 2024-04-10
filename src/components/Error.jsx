export const Error = ({ error }) => {
    return (
        <div className='card flex justify-content-center align-items-center min-h-screen'>
            <h1>Error: {error}</h1>
        </div>
    );
};