import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";



function App() {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    useEffect(() => {
        let valueStorageAsString = localStorage.getItem('value')
        let maxValueStorageAsString = localStorage.getItem('maxvalue')
        let startValueStorageAsString = localStorage.getItem('startvalue')
        if(valueStorageAsString) {
            let valueStorage = JSON.parse(valueStorageAsString)
            setValue(valueStorage)
        }
        if(maxValueStorageAsString) {
            let maxValueStorage = JSON.parse(maxValueStorageAsString)
            setMaxValue(maxValueStorage)
        }
        if(startValueStorageAsString) {
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
    function reset(){
        setValue(startValue)
    }
    function changeDisplayValue(){
        setValue(startValue)
    }

    function onChangeStartValue(value: number) {
        setStartValue(value)
    }
    function onChangeMaxValue(value: number) {
        setMaxValue(value)
    }
    // let disabledIncrement = maxValue === startValue

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
                />
            </div>
            <div className={'Wrapper'}>
                <div className={'Wrapper_small'}>
                    <Counter
                        value={value}
                    />
                </div>
                <Button
                    buttonName={'INC'}
                    onClick={increment}
                    disabled={maxValue === startValue}
                />
                <Button
                    buttonName={'RESET'}
                    onClick={reset}

                />
            </div>
        </div>
    )
}

export default App;
