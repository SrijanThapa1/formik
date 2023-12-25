import React from 'react'
import * as Yup from 'yup'
const initialValues={
    email:'',
    password:''
}
const validationSchema=Yup.object({
    email:Yup.string().email("Invalid email fromat").required("Required"),
    password:Yup.string().required("Required")
})
function ForgotPassword() {
  return (
    <div>
        <div>
            <div>
            <h1> Facebook</h1>
            </div>
            <div>
                
            </div>

        </div>

    </div>
    
  )
}

export default ForgotPassword