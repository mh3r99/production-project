import React from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                +
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                -
            </Button>
            <Button onClick={handleAddFive} data-testid="add-btn">
                5
            </Button>
        </div>
    );
};
export default Counter;
