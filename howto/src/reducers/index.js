import {
    LOGIN_START,
    GET_HOWTOS_START,
    GET_HOWTOS_WIN,
    GET_HOWTOS_LOSE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    ADD_HOWTO_START,
    ADD_HOWTO_SUCCESS,
    ADD_HOWTO_FAILURE,
    EDIT_HOWTO_START,
    EDIT_HOWTO_SUCCESS,
    EDIT_HOWTO_FAILURE,
    GET_AHOWTO_START,
    GET_AHOWTO_SUCCESS,
    GET_AHOWTO_FAILURE,
    DELETE_HOWTO_START,
    DELETE_HOWTO_SUCCESS,
    DELETE_HOWTO_FAILURE
} from '../actions';

const initialState ={
    error: '',
    errorCode: '',
    gettingHowTos: false,
    howtos: [],
    howto: {},
    loggingIn: false,
    registering: false,
    addingHowTo: false,
    editingHowTo: false,
    token: localStorage.getItem('token'),
    gettingAHowTo: false,
    deletingHowTo: true,
}

const reducer = (state= initialState, action) =>{
    switch (action.type){
        case LOGIN_START:{
            return{
                ...state,
                loggingIn: true
            }
        }
        case GET_HOWTOS_START:{
            return{
                ...state,
                error: '',
                gettingHowTos: true
            }
        }
        case GET_HOWTOS_WIN:{
            console.log(action.payload);
            console.log('TEEESSSSSSTTTTT');
            return{
                ...state,
                error: '',
                gettingHowTos: false,
                howtos: action.payload
            }
        }

        case GET_HOWTOS_LOSE:{
            return{
                ...state,
                errorCode: action.payload.status
            }
        }

        case GET_AHOWTO_START:{
            return{
            ...state,
            gettingAHowTo: true,
            }

        }
        case GET_AHOWTO_SUCCESS:{
            return{
            ...state,
            gettingAHowTo: false,
            howto: action.payload 
            }

        }
        case GET_AHOWTO_FAILURE:{

            return{
                ...state,
                error: "Not working"
            }

        }

        case REGISTER_START:{
            return{
                ...state,
                error:"",
                registering: true
            }
        }
        case REGISTER_SUCCESS:{
            return{
                ...state,
                error: '',
                registering: false,  
            }
        }
        case REGISTER_FAILURE:{
            return{
                ...state,
                error: 'FAILED'
                  
            }
        }
        case ADD_HOWTO_START:{
            return{
                ...state,
                addingFriend: true

            }
        }
        case ADD_HOWTO_SUCCESS:{
            return{
                ...state,
                addingHowTo: false,
                howtos: action.payload
            }
        }
        case ADD_HOWTO_FAILURE:{
            return{
            ...state,
            error: 'Ded'
            }
        } 
        case EDIT_HOWTO_START:{
            return{
                ...state,
                editingHowTo: true

            }
        }
        case EDIT_HOWTO_SUCCESS:{
            return{
                ...state,
                editingHowto: false,
                howtos: action.payload

            }
        }
        case EDIT_HOWTO_FAILURE:{
            return{
                ...state,
                editingHowTo: false,
                error: 'Ded'
            }
        }

        case DELETE_HOWTO_START:{
            return{
                ...state,
                deletingHowTo: true
            }

        }
        case DELETE_HOWTO_SUCCESS:{

            return{
                ...state,
                deletingHowTo: false,
                howtos: action.payload
            }

        }
        case DELETE_HOWTO_FAILURE:{

            return{
                ...state,
                deletingHowTo: false,
                error: 'Failed to Delete'
            }

        }
        default: 
            return state;
    }
}

export default reducer;