import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleTodo() {
    const params = useParams();
    const [todo, setTodo] = useState({});
    useEffect(() => {
        const todoId = params.todoId;


        fetch(`https://dummyjson.com/todos/${todoId}`).then(res => res.json()).then(data => { 
            setTodo(data);
        }
        )
    }, []);
    
    return <>
        <h2>Todo: {todo.todo}</h2>
        <h4>Completed: { todo.completed ? 'Yes' : 'No'}</h4>
    </>
 }

 export default SingleTodo;