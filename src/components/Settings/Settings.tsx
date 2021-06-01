import React, {ChangeEvent} from "react";
import s from './Settings.module.css'

type SettingsPropsType = {
    maxValue: number
    startValue: number
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({maxValue, startValue, onChangeMaxValue, onChangeStartValue}) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeMaxValue(e.currentTarget.valueAsNumber)
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeStartValue(e.currentTarget.valueAsNumber)

    return (
        <>
            <div>
                <span>max value: </span>
                <input
                    className={maxValue < 0 ? s.incorrect : ''}
                    type={'number'}
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                />
            </div>
            <div>
                <span>start value: </span>
                <input
                    className={startValue < 0 ? s.incorrect : ''}
                    type={'number'}
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                />
            </div>
        </>
    )
}