const initState = {
    theme: 'some',
    themes: ['dark', 'red', 'some', 'blue', 'light']
};

type InitStateType = {
    theme: string
    themes: string[]
}

export const themeReducer = (state = initState, action: ThemeReducerTypes): InitStateType => { // fix any
    switch (action.type) {
        case 'THEME_REDUCER/CHANGE_THEME': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeTheme = (theme: string) => ({
    type: 'THEME_REDUCER/CHANGE_THEME',
    theme
} as const);

type ThemeReducerTypes = ReturnType<typeof changeTheme>