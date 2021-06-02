let initialState = {
    value: 0,
    maxValue: 5,
    startValue: 0,
    isValuesSet: false,
    error: false,
    disabled: false
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "INC_VALUE":
            return {
                ...state,
                value: state.value + 1
            }
        case "RESET_VALUE":
            return {
                ...state,
                value: state.startValue
            }
        case "CHANGE_DISPLAY_VALUE" :
            return {
                ...state,
                isValuesSet: false,
                value: state.startValue,
                disabled: true
            }
        case "CHANGE_START_VALUE":
            return {
                ...state,
                startValue: action.value,
                isValuesSet: true,
                disabled: false,
            }
        case "CHANGE_MAX_VALUE" :
            return {
                ...state,
                isValuesSet: true,
                maxValue: action.value,
                disabled: false,

            }
        default :
            return state
    }

}
export type ActionsType = IncCounterACType | ResetCounterValueACType
    | ChangeDisplayValueACType | ChangeStartValueACType | ChangeMaxValueACType

export const incCounterAC = () => ({type: 'INC_VALUE'} as const)
type IncCounterACType = ReturnType<typeof incCounterAC>

export const resetCounterValueAC = () => ({type: "RESET_VALUE"} as const)
type ResetCounterValueACType = ReturnType<typeof resetCounterValueAC>

export const changeDisplayValueAC = () => ({type: "CHANGE_DISPLAY_VALUE"} as const)
type ChangeDisplayValueACType = ReturnType<typeof changeDisplayValueAC>

export const changeStartValueAC = (value: number) => ({type: "CHANGE_START_VALUE", value} as const)
type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>

export const changeMaxValueAC = (value: number) => ({type: "CHANGE_MAX_VALUE", value} as const)
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
