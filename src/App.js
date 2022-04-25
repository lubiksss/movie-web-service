import {useState} from 'react'

function App() {
    const [toDo, setToDo] = useState("")
    const [toDos, setTodos] = useState([])
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setTodos(currentArray => [toDo, ...currentArray]);
        setToDo("");
    }
    return (
        <div>
            <h1>My ToDos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}
                       type="text"
                       value={toDo}
                       placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>
            <hr/>
            {toDos.map((item,index) => <li key={index}>{item}</li>)}
        </div>
    );
}

export default App;
