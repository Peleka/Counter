import React from "react";

type CounterPropsType = {
    value: number
}

export const Counter: React.FC<CounterPropsType> = ({value}) => {

    return (
        <>
            {value}
        </>
    )
}