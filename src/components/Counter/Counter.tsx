import React from "react";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    maxValue: number
    startValue: number
    isValuesSet: boolean
    error: boolean
}

export const Counter: React.FC<CounterPropsType> = ({value, maxValue, startValue,isValuesSet,error}) => {

    if( maxValue < 0 || startValue < 0 || maxValue === startValue) {
        error = true
    }
    let styleNumber = maxValue === value || error ? s.bold : s.standard

    return (
        <>
            {<span className={styleNumber}>{ error ? 'Incorrect value' : isValuesSet ? 'enter values and press "set"' : value}</span>}
        </>
    )
}