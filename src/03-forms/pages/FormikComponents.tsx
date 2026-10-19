import {  Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
    

    return (
        <div>
            <h1>Formik Components</h1>
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
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span"/>
                          
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text"  />
                            <ErrorMessage name="lastName" component="span"/>
                            
                            <label htmlFor="email">Email </label>
                            <Field name="email" type="text"  />
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type </label>
                            <Field name="jobType" as="select"  >
                                <option value="">Pick a job type</option>
                                <option value="devloper">Developer</option>
                                <option value="dba">DBA</option>
                                <option value="devops">DevOps</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>
                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>
                            
                            <button type="submit">Create</button>
                            
                        </Form>
                    )
                }

            </Formik>
            
        </div>
    )
}

export default FormikComponents
