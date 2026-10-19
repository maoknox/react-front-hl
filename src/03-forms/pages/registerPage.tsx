import { SyntheticEvent } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {
    const {name, email, password, confirmPassword, onChange, resetForm, isValidEmail} = useForm(
        {
            name: 'Mauro',
            email: 'femauro@gmail.com',
            password: '123456',
            confirmPassword: '123456'
        }
    );

    const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
    }

    
    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={ (ev) => onSubmit(ev) }>
                <input 
                    type="text" 
                    placeholder='Username' 
                    value={name}
                    onChange={onChange}
                    name="name"
                    className={name.trim().length <=0 ? 'has-error' : ''}
                />
                {name.trim().length <=0 && <span>Este campo es necesario</span>}
                <input 
                    type="email" 
                    placeholder='Email' 
                    value={email}
                    onChange={onChange}
                    name="email"
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {(email && !isValidEmail(email)) && <span>El email no es válido</span>}
                
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={password}
                    onChange={onChange}
                    name="password"
                />                
                {password.trim().length <=0 && <span>Este campo es necesario</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span>El password debe tener al menos 6 caracteres</span>}
                <input 
                    type="password" 
                    placeholder='Confirm Password' 
                    value={confirmPassword}
                    onChange={onChange}
                    name="confirmPassword"
                />
                {confirmPassword.trim().length <=0 && <span>Este campo es necesario</span>}
                {confirmPassword.trim().length > 0 && password !== confirmPassword && <span>Las contraseñas no coinciden</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm} >Reset Form</button>
            </form>
        </div>
    )
}

export default RegisterPage