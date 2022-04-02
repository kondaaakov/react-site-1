import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <section>
            <h2>Счётчик: {count}</h2>

            <button onClick={increment}>плюс 1</button>
            <button onClick={decrement}>минус 1</button>
        </section>
    );
};

export default Counter;