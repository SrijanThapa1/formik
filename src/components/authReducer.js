const initalState ={
    user:null,
    isLoggedIn:false,
    signUpError:null,
    logInError:null
};

const authReducer = (state = initalState, action) => {
    switch(action.type){
        case 'SignUpSuccess':
            return{
                ...state,
                user: action.payload,
                signUpError:null,
            };
        case 'LogInSuccess':
            return{
                ...state, 
                user:action.payload,
                isLoggedIn:true,
                logInError:null,
            };
        case 'LogInFailure':
            return{
                ...state,
                user:null,
                isLoggedIn:false,
                logInError:"incorrect email or password"
            };
        default:
            return state;
    }
}
export default authReducer;