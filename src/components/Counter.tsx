import React from "react";
import s from './Counter.module.css'

type CounterType = {
    number: number
    increaseNumber: () => void
    resetCounter: () => void
}

export const Counter = (props: CounterType) => {

    const onIncreaseNumber = () => props.increaseNumber()
    const onResetCounter = () => props.resetCounter()

    return (
        <>
            <div className={s.display}>
                <span className={props.number === 5 ? s.maxNumber : s.num}>{props.number}</span>
            </div>
            <div className={s.buttons}>
                <button className={s.btn_inc}  onClick={onIncreaseNumber} disabled={props.number === 5}>inc</button>
                <button className={s.btn_reset} onClick={onResetCounter}>reset</button>
            </div>
           </>
    )
}