import {Field, ErrorMessage, Formik, Form} from 'formik'
import * as yup from 'yup'
import './Login.css';
import { useAuth } from '../../contexts/auth';

export const Login = () => {
    
    const {signIn} = useAuth()



    function handleSubmit(values){
        signIn(values)
    }
    
    const validations = yup.object().shape({
        identifier: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

    return (
        <>
            <h1>Login</h1>
            <Formik 
                initialValues={
                    {
                        password:'',
                        identifier:''
                    }} 
                onSubmit={handleSubmit}
                validationSchema={validations}
                >
                <Form className="form">
                    <div className="form-group">
                        <Field name="identifier" className="login-field" />
                        <ErrorMessage component="span" name="identifier" className="login-error"></ErrorMessage>
                    </div>
                    <div className="form-group">
                        <Field name="password" className="login-field" />
                        <ErrorMessage component="span" name="password" className="login-error"></ErrorMessage>
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}
