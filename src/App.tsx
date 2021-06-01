import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";


function App() {

    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [isValuesSet, setIsValuesSet] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let valueStorageAsString = localStorage.getItem('value')
        let maxValueStorageAsString = localStorage.getItem('maxvalue')
        let startValueStorageAsString = localStorage.getItem('startvalue')
        if (valueStorageAsString) {
            let valueStorage = JSON.parse(valueStorageAsString)
            setValue(valueStorage)
        }
        if (maxValueStorageAsString) {
            let maxValueStorage = JSON.parse(maxValueStorageAsString)
            setMaxValue(maxValueStorage)
        }
        if (startValueStorageAsString) {
            let startValueStorage = JSON.parse(startValueStorageAsString)
            setStartValue(startValueStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('maxvalue', JSON.stringify(maxValue))
        localStorage.setItem('startvalue', JSON.stringify(startValue))
    }, [value, maxValue, startValue])

    function increment() {
        setValue(value + 1)
    }

    function reset() {
        setValue(startValue)
    }

    function changeDisplayValue() {
        setIsValuesSet(false)
        setValue(startValue)
        setDisabled(true)
    }

    function onChangeStartValue(value: number) {
        setIsValuesSet(true)
        if (value < 0 || value === maxValue || value > maxValue) {
            setError(true)
            setStartValue(value)
            setDisabled(true)
        } else {
            setError(false)
            setStartValue(value)
            setDisabled(false)
        }
    }

    function onChangeMaxValue(value: number) {
        setIsValuesSet(true)
        if (value < 0 || value === startValue || value < startValue) {
            setError(true)
            setMaxValue(value)
            setDisabled(true)

        } else {
            setError(false)
            setMaxValue(value)
            setDisabled(false)
        }
    }

    return (
        <div className={'App'}>
            <div className={'Wrapper'}>
                <div className={'Wrapper_small'}>
                    <Settings
                        maxValue={maxValue}
                        startValue={startValue}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                    />
                </div>
                <Button
                    buttonName={'SET'}
                    onClick={changeDisplayValue}
                    disabled={disabled}
                />
            </div>
            <div className={'Wrapper'}>
                <div className={'Wrapper_small'}>
                    <Counter
                        value={value}
                        maxValue={maxValue}
                        isValuesSet={isValuesSet}
                        error={error}
                    />
                </div>
                <Button
                    buttonName={'INC'}
                    onClick={increment}
                    disabled={value === maxValue || error}
                />
                <Button
                    buttonName={'RESET'}
                    onClick={reset}
                    disabled={value === 0 || error}
                />
            </div>
        </div>
    )
}

export default App;
