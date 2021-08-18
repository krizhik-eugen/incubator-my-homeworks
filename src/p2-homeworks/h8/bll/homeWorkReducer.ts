import {InitialStateType, UserType} from "../HW8";

type ActionsType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'sort': {
            let newState: InitialStateType = {...state}
            if (action.payload === 'up') {
                newState = {...state,
                    people: [...state.people.sort((a, b) => b.age - a.age)],
                    sorted: action.payload}
            } else if (action.payload === 'down') {
                newState = {...state,
                    people: [...state.people.sort((a, b) => a.age - b.age)],
                    sorted: action.payload}
            }
            return newState
        }
        case 'check': {
            let newState: InitialStateType
            newState = {...state, people: [...state.people.filter(p => (p.age >= 18))], sorted: action.payload}
            return newState
        }
        default:
            return state
    }
}