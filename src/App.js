import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('text');

  return (
    <div className="App">
        <section>
            <Counter />
        </section>

        <section>
            <h1>Инпут: {value}</h1>

            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        </section>
    </div>
  );
}

export default App;
