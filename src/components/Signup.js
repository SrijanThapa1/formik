import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import { Link } from 'react-router-dom';
import axios from 'axios';
const initialValues= {
    firstName:'',
    lastName:'',
    email:'',
    birthday:'',
    gender:''
}
const validationSchema= Yup.object({
    firstName:Yup.string().required("Required"),
    lastName:Yup.string().required("Required"),
    email:Yup.string().email("invalid email froamt").required('Required'),
    password:Yup.string().required("required").min(8,"Must be at least 8 characters"),
    birthday:Yup.date().required("required"),
    gender:Yup.string().required("required")

})
const onSubmit = (values, {resetForm})=>{

    axios.post('https://658ae562ba789a9622381c2b.mockapi.io/srijan/formikFacebook',values)
    .then(response =>{ console.log(response)
    resetForm({
        values:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            birthday:'',
            gender:''
        },
    })
})
    .catch(err => console.log(err))
    console.log("form date", values)
}
function Signup() {
    return(
    <div>
        <h2> Sign up</h2>
        <p> It's quick and easy</p>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <Field type="text" import id="firstName" name="firstName" placeholder="firstname"/>
                <ErrorMessage name='firstName' component={TextError}/>

                <Field type="text" import id="lastName" name="lastName" placeholder="lastname"/>
                <ErrorMessage name='lastName' component={TextError}/>

                <Field type='email' id='email' name='email' placeholder="Email"/>
                <ErrorMessage name='email'>
                    {
                        (errorMsg) =>
                        <div className='error'>
                                {errorMsg}
                        </div>
                        
                    }
                </ErrorMessage>

                <Field type='text' id='password' name='password' placeholder="Password"/>
                <ErrorMessage name='password' component={TextError}/>
                    
                <label htmlFor='birthday'>Birthday</label>
                <Field type='date' name="birthday" id="birthday"/>
                <ErrorMessage name='birthday' component={TextError}/>

                <label htmlFor='gender'>Gender</label>
                <Field as='select' id="gender" name='gender'>
                 <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </Field>
               
                <button  type='submit' id="signin" disabled={Formik.isValid}>SignIn</button>

            </Form>
        </Formik>
        <div className='alreadyHaveAccount'>
            Already have an account? <Link to='/'>Click Here</Link>
        </div>
    </div>

)
}
export default Signup