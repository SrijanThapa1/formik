import React, { useState } from 'react';
import {Formik,Field, Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import {Link} from 'react-router-dom';
import SubmitForm from './SubmitForm';
import Signup from './Signup';
import Modal from 'react-modal';

const initialValues={
    email:'',
    password:''
}

const validationSchema= Yup.object({
    email:Yup.string().email("Invalid email format").required("Required!"),
    password:Yup.string().required("Required!")
})



function LogInFrom() {
    const [showSignupModel, setShowSignupModel]= useState(false);

    const openSignupModel =() =>{
        setShowSignupModel(true);
    }
    const closeSignUpModel = () =>{
        setShowSignupModel(false);
    }

    const onSubmit= values =>{
        console.log("From data", values)
        setIsSubmitSucess(true);
    }
    const [isSubmitSuccess, setIsSubmitSucess]= useState(false);
  return (
    <div className='logIn_div'>
        {
            isSubmitSuccess? <SubmitForm/> :
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
                        <Field type='password' id='password' name='password' placeholder="Password"/>
                        <ErrorMessage name='password' component={TextError}/>
                   
                    <button type='submit' disabled={Form.isValid}>Log In</button>
                </Form>
            </Formik>
            <div className='forgot-account'>
    Forgot account? <Link to ='/forgotPassword'> Click Here</Link>
    </div>
    <div className='signup'>
        <button id='signup-btn'onClick={openSignupModel}> Create new account</button>
    {/* <Link to="/signup"> Create new account</Link> */}
    </div>
    {/* Modal for Signup */}
    {/* {showSignupModel && (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeSignUpModel}>
                    &times;
                </span>
                <Signup/>
            </div>
        </div>
    )
    } */}
    {/* Using actual Model imported from react-modal */}
    <Modal isOpen={showSignupModel} onRequestClose={closeSignUpModel}
    className= "modal-content"
    overlayClassName= "modal-overlay">
        <span className='close' onClick={closeSignUpModel}>
            &times;
        </span>
        <Signup/>
    </Modal>
</div>
}

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