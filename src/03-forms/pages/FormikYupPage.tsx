import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {
    

    
    const { 
        handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: 'Mauro',
            lastName:'',
            email:''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema:  Yup.object({
            firstName:Yup.string()
            .max(15,"Debe tener 15 caracteres o menos")
            .required('Required'),
            lastName:Yup.string()
            .max(10,"Debe tener 10 caracteres o menos")
            .required('Required'),
            email:Yup.string()
            .required('Required')
            .email('El email no es válido debe ser de forma:  yxz@correo.com ')
        })
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form onSubmit={ handleSubmit }  noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type='text' {...getFieldProps('firstName')}/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                
                <label htmlFor="lastName">Last Name</label>
                <input type='text' {...getFieldProps('lastName')}/>
                {touched.lastName &&errors.lastName && <span>{errors.lastName}</span>}
                
                <label htmlFor="email">Email <address></address></label>
                <input type='email' {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default FormikYupPage
