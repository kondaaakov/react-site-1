import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('text');

    return (
        <section>
            <h2>Инпут: {value}</h2>

            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        </section>
    );
};

export default Input;