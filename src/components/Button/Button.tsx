import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    buttonName: string
    onClick: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button
                className={s.commonStyle}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.buttonName}
            </button>
        </>
    )
}