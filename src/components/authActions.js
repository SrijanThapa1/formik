export const signupSuccess = (user)=> (
    {
        type:'SignUpSuccess',
        payload:user,
    }
);

export const LogInSuccess = (user) =>(
    {
        type:'logInsuccess',
        payload:user,
    }

)

export const LogInFailure = () =>({
    type:"LogInFailure"
})