import { useState } from 'react';
import './App.css';

function App() {

  const [todo, setTodo] = useState([{
    id: 1,
    text: "react를 배워봅시다."
  }])
  
  const [text, setText] = useState('');

  const iuputContent = (event) => {
    setText(event.target.value);
  }

  const clickBtn = () => {
    const newTodo = {
      id: todo.length + 1,
      text
    };

    setTodo([...todo, newTodo]);
    setText('');
  }

  return (
    <div className="App">
      <div className='App-inputBox'>
        <input
          className='App-input'
          value={text}
          onChange={iuputContent}
        >
        </input>
        <button
          className='App-btn' 
          onClick={clickBtn}>
          추가하기
        </button>
      </div>
      <header className="App-header">
        My Todo List
      </header>
      <div
        key={todo.id}
      >
        {todo.map((item) => {
          return (
            <div className='App-text'>
              {item.text}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
