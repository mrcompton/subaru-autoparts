const initialState = {
    selectedYear: null,
    selectedModel: '',
    selectedTrim: ''
}
const UPDATE_SELECTED_VEHICLE = 'UPDATE_SELECTED_VEHICLE'

export function updateSelectedVehicle(vehicleObj){
    return{
        type: UPDATE_SELECTED_VEHICLE,
        payload: vehicleObj
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_SELECTED_VEHICLE:
            const {selectedYear,selectedModel,selectedTrim} = action.payload
            return {...state, selectedYear, selectedModel, selectedTrim}
        default:
            return state;
    }
}