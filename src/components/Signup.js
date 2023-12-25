import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import TextError from './TextError';
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
const onSubmit = values=>{
    console.log("form date", values)
}
function Signup() {
    return(
    <div>
        <h2> Sign up</h2>
        <p> It's quick and easy</p>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <Field type="text" import id="firstname" name="firstname" placeholder="firstname"/>
                <ErrorMessage name='firstname' component={TextError}/>

                <Field type="text" import id="lastname" name="lastname" placeholder="lastname"/>
                <ErrorMessage name='lastname' component={TextError}/>

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
                </Field>
                <button id="signin" type='submit' disabled={Form.isValid}>SignIn</button>
            </Form>
        </Formik>
    </div>

)
}
export default Signup