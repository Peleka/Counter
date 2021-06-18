import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {
    changeDisplayValueAC,
    changeMaxValueAC,
    changeStartValueAC,
    incCounterAC,
    resetCounterValueAC
} from "./BLL/counterReducer";


function App() {

    const state = useSelector<AppStateType, AppStateType>(state => state)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     let valueStorageAsString = localStorage.getItem('value')
    //     let maxValueStorageAsString = localStorage.getItem('maxvalue')
    //     let startValueStorageAsString = localStorage.getItem('startvalue')
    //     if (valueStorageAsString) {
    //         let valueStorage = JSON.parse(valueStorageAsString)
    //         setValue(valueStorage)
    //     }
    //     if (maxValueStorageAsString) {
    //         let maxValueStorage = JSON.parse(maxValueStorageAsString)
    //         setMaxValue(maxValueStorage)
    //     }
    //     if (startValueStorageAsString) {
    //         let startValueStorage = JSON.parse(startValueStorageAsString)
    //         setStartValue(startValueStorage)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('value', JSON.stringify(value))
    //     localStorage.setItem('maxvalue', JSON.stringify(maxValue))
    //     localStorage.setItem('startvalue', JSON.stringify(startValue))
    // }, [value, maxValue, startValue])

    function increment() {
        dispatch(incCounterAC())
    }

    function reset() {
        dispatch(resetCounterValueAC())
    }

    function changeDisplayValue() {
        dispatch(changeDisplayValueAC())

    }

    function onChangeStartValue(value: number) {
        dispatch(changeStartValueAC(value))
    }

    // function onChangeMaxValue(value: number) {
    //     setIsValuesSet(true)
    //     setMaxValue(value)
    //     if (value < 0 || value === startValue || value < startValue) {
    //         setError(true)
    //         setDisabled(true)
    //
    //     } else {
    //         setError(false)
    //         setDisabled(false)
    //     }
    // }
    function onChangeMaxValue(value: number) {
        dispatch(changeMaxValueAC(value))
    }

    return (
        <div className={'App'}>
            <div className={'Wrapper'}>
                <div className={'Wrapper_small'}>
                    <Settings

                        maxValue={state.counter.maxValue}
                        startValue={state.counter.startValue}
                        onChangeStartValue={onChangeStartValue}
                        onChangeMaxValue={onChangeMaxValue}
                    />
                </div>
                <Button
                    buttonName={'SET'}
                    onClick={changeDisplayValue}
                    disabled={state.counter.disabled}
                />
            </div>
            <div className={'Wrapper'}>
                <div className={'Wrapper_small'}>
                    <Counter
                        value={state.counter.value}
                        startValue={state.counter.startValue}
                        maxValue={state.counter.maxValue}
                        isValuesSet={state.counter.isValuesSet}
                        error={state.counter.error}
                    />
                </div>
                <Button
                    buttonName={'INC'}
                    onClick={increment}
                    disabled={state.counter.value === state.counter.maxValue || state.counter.error}
                />
                <Button
                    buttonName={'RESET'}
                    onClick={reset}
                    disabled={state.counter.value === 0 || state.counter.error}
                />
            </div>
        </div>
    )
}

export default App;
