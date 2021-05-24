import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";


function App() {

    const [value, setValue] = useState<number | string>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [error, setError] = useState(false)

    const incorrect = 'Incorrect value!'
    const correct = 'Enter value and press "set" '

    useEffect(() => {
        setValue(correct)
        setError(false)
        setDisabled(true)
    }, [])

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
            let num = +value + 1
            setValue(num)
    }

    function reset() {
        setValue(startValue)
    }

    function changeDisplayValue() {
        setValue(startValue)
        setDisabled(true)
    }

    function onChangeStartValue(value: number) {
        if (value < 0 || value === maxValue || value > maxValue) {
            setValue(incorrect)
            setStartValue(value)
            setDisabled(true)
            setError(true)
        } else {
            setValue(correct)
            setStartValue(value)
            setDisabled(false)
            setError(false)
        }
    }

    function onChangeMaxValue(value: number) {
        if (value < 0 || value === startValue) {
            setValue(incorrect)
            setMaxValue(value)
            setDisabled(true)
            setError(true)
        } else {
            setValue(correct)
            setMaxValue(value)
            setDisabled(false)
            setError(false)
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
                        incorrect={incorrect}
                    />
                </div>
                <Button
                    buttonName={'INC'}
                    onClick={increment}
                    disabled={value === maxValue || error || value === incorrect || value === correct}
                />
                <Button
                    buttonName={'RESET'}
                    onClick={reset}
                    disabled={value === 0}
                />
            </div>
        </div>
    )
}

export default App;
