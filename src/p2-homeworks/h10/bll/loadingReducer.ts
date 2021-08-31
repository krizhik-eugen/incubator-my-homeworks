
export type LoadingStateType = {
    isLoading: boolean
}
type LoadingAT = {
    type: 'SET-LOADING'
    isLoading: boolean
}

export type ActionType = LoadingAT

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): LoadingStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => ({type: 'SET-LOADING', isLoading})