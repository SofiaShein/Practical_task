import './App.css';
import SingleTodo from './components/SingleTodo';
import Todos from "./components/Todos";
import { Container } from "react-bootstrap";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
  },
  {
    path: "/todo/:todoId",
    element: <SingleTodo />,
  },
]);

function App() {
  return (
    <Container className='bg-white p-3' style={{ maxWidth: '960px' }}>
      <RouterProvider router={router} />
    </Container>
  );
}
export default App;
