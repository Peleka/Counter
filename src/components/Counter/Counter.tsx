import React from "react";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number | string
    maxValue: number
    incorrect: string
}

export const Counter: React.FC<CounterPropsType> = ( {value, maxValue, incorrect} ) => {
    const styleNumber = (maxValue === +value) || (value === incorrect) ? s.bold : s.standart

    return (
        <>
            {<span className={styleNumber}>{value}</span>}
        </>
    )
}