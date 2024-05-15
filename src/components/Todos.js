import ListGroup from 'react-bootstrap/ListGroup';
import Todo from "./Todo";
import { useEffect, useState } from "react";
import InputSearch from './InputSearch';


function Todos() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos').then(res => res.json())
      .then(data => {
          setTodos(data.todos);
          console.log(data);
      });
  }, []);

  useEffect(() => {
    const filterResult = todos.filter(todo => todo.todo.toLowerCase().includes(search.trim().toLowerCase()));
    setFilteredTodos(filterResult);
  }, [search])
  
  function filterTodos(e) {
    const value = e.target.value.trim();
    setSearch(value);
  }

  return <>
    <h2>Todos</h2>
    <InputSearch filterTodos={ filterTodos} />
    <ListGroup>
      {search.trim() ?
        filteredTodos.map(todo => <Todo todo={todo} key={todo.id} />) :
      todos.map(todo => <Todo todo={todo} key={todo.id} />)}
    </ListGroup>
    </>
    
}

export default Todos;