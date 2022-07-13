import {useState, useEffect} from 'react'
import Wrapper from './../assets/wrappers/RegisterPage'
import Logo from '../components/Logo'
import { FormRow } from '../components'
import { Alert } from '../components'
import { useAppContext } from '../context/appContext'
function Register() {
   const initialState = {
     name: '',
     email:'',
     password:'',
     isMember: true
     
   }
    const [values, setValues] = useState(initialState)
    const {isLoading, showAlert} = useAppContext()
    const toggleMember =()=>{
      setValues({...values, isMember: !values.isMember})
    }
    const onSubmit =(e)=>{
      e.preventDefault()
      console.log(e.target)
    }
    const handleChange =(e)=>{
      console.log(e.target) 
    } 
    
  return (
    <Wrapper className='full-page'>
      <form onSubmit={onSubmit} className='form'>
        <Logo />
         <h3>{values.isMember ? 'Login' : 'Register'}</h3>
         {showAlert && <Alert /> }
         

         <div className='form-row'>
           <label htmlFor="name" className='form-label'>
             name
           </label>
           <input 
           type="text" 
           name="name" 
           className='form-input'
           
           onChange={handleChange}
            />
            <FormRow 
            name='email'
            type='text'
            handleChange={handleChange}
            value={values.email}
             />
            <FormRow 
            value={values.password}
            name='Password'
            type='password'
            handleChange={handleChange}  />
         </div>
         <button type='submit' className='btn btn-block'>Submit</button>
         <p>
           { values.isMember ? 'Not a member please register': 'Already Member?'}
           <button className='member-btn' onClick={toggleMember} >
             {values.isMember ? 'Register' : 'Login'}
           </button>
         </p>
      </form>
      </Wrapper>
  )
}

export default Register