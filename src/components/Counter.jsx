import React, {useState} from 'react';

const Counter = () => {
    const [counter, set_counter] = useState(0)

    function increment()
    {
        set_counter(counter + 1)
    }

    function decrement()
    {
        set_counter(counter - 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;