import React, {ChangeEvent} from "react";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
}

export const Settings: React.FC<SettingsPropsType> = ({ maxValue, startValue, onChangeMaxValue, onChangeStartValue}) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeMaxValue(JSON.parse(e.currentTarget.value))
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => onChangeStartValue(JSON.parse(e.currentTarget.value))

    return (
        <>
            <div>
                <span>max value: </span>
                <input
                    type={'number'}
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                />
            </div>
            <div>
                <span>start value: </span>
                <input
                    type={'number'}
                    value={startValue}
                    onChange={onChangeStartValueHandler}

                />
            </div>
        </>
    )
}