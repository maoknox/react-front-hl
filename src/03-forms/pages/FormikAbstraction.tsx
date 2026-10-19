import {  Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheck } from '../components/'

export const FormikAbstraction = () => {
    

    return (
        <div>
            <h1>Formik Abstraction</h1>
            <Formik
                initialValues={{
                    firstName: 'Mauro',
                    lastName:'',
                    email:'',
                    terms:false,
                    jobType:''
                }}
                onSubmit={ (values) => {
                    console.log(values)
                 } }
                 validationSchema={
                    Yup.object({
                        firstName:Yup.string()
                            .max(15,"Debe tener 15 caracteres o menos")
                            .required('Required'),
                        lastName:Yup.string()
                            .max(10,"Debe tener 10 caracteres o menos")
                            .required('Required'),
                        email:Yup.string()
                            .required('Required')
                            .email('El email no es válido debe ser de forma:  yxz@correo.com '),
                        terms:Yup.boolean()
                            .oneOf([true],"Debe aceptar las condiciones"),
                        jobType:Yup.string()
                            .notOneOf(['devops'], "No se puede seleccionar esta opción")
                            .required('Required')
                    })
                 }
            >
                {
                    () => (
                        <Form>
                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='Mauro'
                            />
                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Vargas Hincapié'
                            />

                            <MyTextInput 
                                label='Email' 
                                name='email'
                                placeholder='femauro@gmail.com'
                            />

                            <MySelect label='Job Type' name='jobType'>
                                <option value="">Pick a job type</option>
                                <option value="devloper">Developer</option>
                                <option value="dba">DBA</option>
                                <option value="devops">DevOps</option>
                            </MySelect>
                            <MyCheck label='Terms an conditions' name='terms'/>

                            <button type="submit">Create</button>
                            
                        </Form>
                    )
                }

            </Formik>
            
        </div>
    )
}

export default FormikAbstraction
