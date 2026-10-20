import '../styles/styles.css'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';
export const RegisterFormik = () => {
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    //Formik
    //1. importar librería <Formik></Formik>
    //2. inicializar las props del componente initialValues y validationSchema
    //3. Crear componentes hijos de lafoma { ()=>(<Fom>....</Fom>)}
    return (
        <div>
            <h1>Register formik with api</h1>
            <Formik 
                initialValues={
                { 
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }
                } 
                onSubmit={(values) => {
                    console.log(values)
                } }
                validationSchema={
                    Yup.object({
                        name:Yup.string()
                            .max(15,"Debe tener 15 caracteres o menos")
                            .min(2,"Debe contener al menos 2 caracteres")
                            .required('Required'),
                        email:Yup.string()
                            .required('Required')
                            .email('El email no es válido debe ser de forma:  yxz@correo.com '),                
                        password:Yup.string()
                        .required("Required")
                        .matches(passwordRules,"min 8 characters 1 upper case letter \n 1 lower case letter \n 1 numeric digit."),
                        confirmPassword:Yup.string()
                        .required("Required")
                        .oneOf([Yup.ref("password")],"Passords must match")
                    })
                }
            >
                {
                    ({ handleReset })=>(
                        <Form>
                            <MyTextInput 
                                label='Full Name' 
                                name='name'
                                placeholder='Félix Mauricio Vargas Hincapié'
                            />
                            <MyTextInput 
                                label='Email' 
                                name='email'
                                placeholder='femauro@gmail.com'
                            />
                            <MyTextInput 
                                label='Password' 
                                name='password'
                                type='password'
                            />
                            <MyTextInput 
                                label='Confirm Password' 
                                name='confirmPassword'
                                type='password'
                            />
                            <button type="submit">Create</button>
                            <button type="button" onClick={() => handleReset()}>Resetear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
    
   
}

export default RegisterFormik