import React from "react";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    maxValue: number
    isValuesSet: boolean
    error: boolean
}

export const Counter: React.FC<CounterPropsType> = ({value, maxValue, isValuesSet,error}) => {
    const styleNumber = (maxValue === value || error) ? s.bold : s.standart


    return (
        <>
            {<span className={styleNumber}>{ error ? 'error' : isValuesSet ? 'set values' : value}</span>}
        </>
    )
}