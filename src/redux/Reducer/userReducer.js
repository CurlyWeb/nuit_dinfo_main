
const InitState = {
    user : {},
    loading : false ,
    isLoggedIn : false,
    error : {
            error : false ,
            msg : ""
    }
}
const userReducer = (state = InitState ,  action ) => {

switch (action.type) {
    case action.type = "LOGIN_SUCCESS" :
        return {
            ...state,
            user : action.payload,
            laoding : false,
            isLoggedIn : true
        }
        case action.type == "LOGIN_FAILD" :
            return {
                ...state,
                laoding : false,
                isLoggedIn : false,
                error : {
                    error : true ,
                    msg : action.payload
                }
            }
        default : {
            return state
        }
}

}

export default userReducer