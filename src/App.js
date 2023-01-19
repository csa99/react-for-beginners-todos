import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  const onChange = (e) => setTodo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault();
    
    if( toDo === "" ){
      return;
    }
    setTodos((currentArr) => [toDo, ...currentArr])
    setTodo("");
  };
  //console.log(toDos)

  return (
    <div>
      <h1>My To Dos❤ ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="to do..." onChange={onChange} value={toDo} />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
