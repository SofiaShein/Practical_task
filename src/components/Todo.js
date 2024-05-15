import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Todo({ todo }) {
    return <ListGroup.Item><Link to={`/todo/${todo.id}` } className='my-Link'> {todo.todo}</Link></ListGroup.Item>;
}
export default Todo;