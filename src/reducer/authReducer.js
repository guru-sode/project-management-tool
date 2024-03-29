const initState = {};
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}


export default authReducer;