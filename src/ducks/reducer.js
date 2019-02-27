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
const UPDATE_QUANT = 'UPDATE_QUANT'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

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
    console.log({product})
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export function updateQuant(partID, quantity){
    return{
        type: UPDATE_QUANT,
        payload: {partID, quantity}
    }
}
export function removeFromCart(productIndex){
    return{
        type: REMOVE_FROM_CART,
        payload: productIndex
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
        case UPDATE_QUANT:
            let updateArr = state.cartItems.slice()
            const {partID, quantity} = action.payload
            // console.log(partID,quantity,total)
            // console.log({state})
            updateArr.forEach((val) => {
                if(val.id === partID){
                    val.quantity = quantity
                    val.total = val.quantity * val.price
                    console.log({val})
                }
            })
            return Object.assign({}, state, {cartItems: [...updateArr]})
        case REMOVE_FROM_CART:
            let newArr = state.cartItems.slice()
            newArr.splice(action.payload, 1)
            return Object.assign({},state, {cartItems: newArr})
        default:
            return state;
    }
}