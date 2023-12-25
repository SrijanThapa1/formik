import React from 'react';
import {Formik,Field, Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import {Link} from 'react-router-dom';
// import FormikControl from './FormikControl';

const initialValues={
    email:'',
    password:''
}

const validationSchema= Yup.object({
    email:Yup.string().email("Invalid email format").required("Required!"),
    password:Yup.string().required("Required!")
})
const onSubmit= values =>{
    console.log("From data", values)
}
function LogInFrom() {
  return (
    <div>
    <h1 id='title'> Facebook</h1>
    <Formik initialValues={initialValues} validationSchema={validationSchema}
    onSubmit= {onSubmit}>
        <Form> 
        <p id='garib'> Log in to Garib ko facebooks</p>
                <label htmlFor='email'>Email</label>
                <Field type='email' id='email' name='email' placeholder="Email or Phone Number"/>
                <ErrorMessage name='email'>
                    {
                        (errorMsg) =>
                        <div className='error'>
                                {errorMsg}
                            </div>
                        
                    }
                </ErrorMessage>
     
           
                <label htmlFor='password'>
                    Password
                </label>
                <Field type='text' id='password' name='password' placeholder="Password"/>
                <ErrorMessage name='password' component={TextError}/>
           
            <button type='submit' disabled={Form.isValid}>Log In</button>
        </Form>
    </Formik>
    <div className='forgot-account'>
    Forgot account? <Link to ='/forgotPassword'> Click Here</Link>
    </div>
    <div className='signup'>
    <Link to="/signup"> Create new account</Link>
    </div>
       

    </div>
  )
}
// return(
//     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
//         {
//             formik =>{
//                 return <Form>

//                 <FormikControl
//                   control="input"
//                   type="email"
//                   label="Email"
//                   name="email"/>
//                 <FormikControl 
//                 control='input'
//                 type='password'
//                 label="password"/>
//                 <button type='Submit' disabled={!formik.isValid}>Submit</button>

//                 </Form>
//             }
//         }
//     </Formik>
// )

// }

export default LogInFrom;