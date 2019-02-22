const initialState = {
    year: null,
    model: '',
    trim: '',
    id: '', //user id
    username: '',
    email: '',
    cart: []
}
const UPDATE_VEHICLE = 'UPDATE_VEHICLE'
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CART = 'UPDATE_CART'

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

export function updateCart(cartObj){
    return{
        type: UPDATE_CART,
        payload: cartObj
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
        case UPDATE_CART:
            const {cart} = action.payload
            return {...state, cart}
        default:
            return state;
    }
}