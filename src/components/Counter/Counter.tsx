import React from "react";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    notice: boolean
    maxValue: number
    correct: string
    incorrect: string

}

export const Counter: React.FC<CounterPropsType> = (
    {value, notice, maxValue, incorrect, correct}
) => {
    const styleNumber = !(maxValue === value) ? s.standart : s.bold
    const styleNotice = notice ? s.bold : s.standart


    return (
        <>
            {value
                ? <span className={styleNumber}>{value}</span>
                : <span className={styleNotice}>{notice ? incorrect : correct }</span>
            }
        </>
    )
}