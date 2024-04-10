import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export const FormikformComponents = () => {

    return (
        <div>
            <h1>Crear Producto</h1>

            <Formik initialValues={{
                name: ''
            }}
                onSubmit={values => console.log(values)}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                })}
            >
                <Form >
                    <div className='field'>
                        <label htmlFor='name'>Nombre</label>
                        <Field id="name" name="name" placeholder="nombre del producto"></Field>
                        <ErrorMessage name='name' component='span'></ErrorMessage>
                    </div>

                    <div className='field'>
                        <button type='submit'>Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};