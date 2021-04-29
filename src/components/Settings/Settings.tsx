import React from "react";
import s from './Settings.module.css'

export const Settings = () => {
    return (
        <>
            <div className={s.display}>
                <span>max value: </span><input />
                <span>start value</span><input/>
            </div>
            <div>
                <button>set</button>
            </div>
        </>
    )
}