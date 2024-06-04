'use client'

import { useState } from 'react';
import classes from './percentageInput.module.css'

export default function PercentageInput({ initialValue, onQuantityChange }) {
    const [value, setValue] = useState(initialValue);

    const handleIncrease = () => {
        const newValue = value + initialValue * 0.1;
        if (newValue <= initialValue * 2) {
            setValue(newValue);
            onQuantityChange(newValue);
        }
    };

    const handleDecrease = () => {
        const newValue = value - initialValue * 0.1;
        if (newValue >= initialValue * 0.8) {
            setValue(newValue);
            onQuantityChange(newValue);
        }
    };

    return (
        <div className={classes.input}>
            <button type="button" onClick={handleDecrease}>-</button>
            <input type="text" value={value} readOnly />
            <button type="button" onClick={handleIncrease}>+</button>
        </div>
    );
};