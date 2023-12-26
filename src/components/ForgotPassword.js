
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { Link } from 'react-router-dom'
const initialValues={
    email:'',
    password:''
}
const handleSearch=()=>{
    alert("Searching it")

}
const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email fromat").required("Required"),
    password:Yup.string().required("Required")
})
const onSubmit=values =>{
    console.log("Form data",values)
}
function ForgotPassword() {
  return (
    <div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div>
                <Form className='password1'>
                    <div className='password'>
                    <h1> Facebook</h1>
                    <Field type="email" id="email" name="email" placeholder="Email"/>
                    <ErrorMessage name='email' component={TextError}/>

                    <Field type='text' id='password' name="password" placeholder="Password"/>
                    <ErrorMessage name='password'component={TextError}/>

                    <button type='submit' id='forgot_login'>Log In</button>
                    <span> <Link to='/forgotPassword'> Forgot account?</Link></span>
                    </div>
                </Form>
                <Form id='findYourAccount'>
                    <h2> Find your account</h2>
                    <p> Please Enter your email to search for your account</p>
                    <Field type='email' id="email" name="email" placeholder="Email"/>
                    <ErrorMessage name='email' component={TextError}/>
                    {/* <button>Cancel</button> */}
                    <button onClick={handleSearch}>Search</button>

             </Form>
        </div>
    </Formik> 
                
            


    </div>
    
  )
}

export default ForgotPassword