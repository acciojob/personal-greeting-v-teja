
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor='nameInput'>Enter your name:</label>
      <br></br>
      <input type='text' id='nameImput' value={name} onChange={handleChange}></input>
      {name ? <p>Hello {name}!</p>:<p></p>}
    </div>
  )
}

export default App
