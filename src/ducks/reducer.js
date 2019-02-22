const initialState = {
    year: null,
    model: '',
    trim: '',
    id: '', //user id
    username: '',
    email: '',
    cartItems: []
}
const UPDATE_VEHICLE = 'UPDATE_VEHICLE'
const UPDATE_USER = 'UPDATE_USER'
const ADD_TO_CART = 'ADD_TO_CART'

export function updateVehicle(vehicleObj){
    return{
        type: UPDATE_VEHICLE,
        payload: vehicleObj
    }
}

export function updateUser(userObj){
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export function addToCart(product){
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_VEHICLE:
            const {year,model,trim} = action.payload
            return {...state, year, model, trim}
        case UPDATE_USER:
            const {id,username,email} =  action.payload
            return {...state, id, username, email}
        case ADD_TO_CART:
            return Object.assign({}, state, {cartItems: [...state.cartItems, action.payload]});
        default:
            return state;
    }
}