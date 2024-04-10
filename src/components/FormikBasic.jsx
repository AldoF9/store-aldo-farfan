import { useFormik } from 'formik';

export const FormikBasic = () => {
    const validations = ({ name, email }) => {
        const errors = {};

        if (!name) {
            errors.name = 'required';
        } else if (name.length >= 15) {
            errors.name = 'Must be 15 characters or less';
        }

        if (!email) {
            errors.email = 'required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    //?funcion
    // getFieldProps(){

    // }

    //* Metodo
    // formik.getFieldProps;

    const {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        handleBlur,
        getFieldProps,
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        // validate: validations,
    });

    return (
        <div>
            <h1>Formulario basico de Formik</h1>

            <form onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' {...getFieldProps('name')} />
                    {touched.name && errors.name && <span>{errors.name}</span>}
                </div>
                <div className='field'>
                    <label htmlFor='email'>email</label>
                    <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <span>{errors.email}</span>}
                </div>
                <div className='field'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};