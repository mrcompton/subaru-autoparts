const initialState = {
    year: null,
    model: '',
    trim: ''
}
const UPDATE_VEHICLE = 'UPDATE_VEHICLE'

export function updateVehicle(vehicleObj){
    return{
        type: UPDATE_VEHICLE,
        payload: vehicleObj
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_VEHICLE:
            const {year,model,trim} = action.payload
            return {...state, year, model, trim}
        default:
            return state;
    }
}