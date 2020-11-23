import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ClassNames from "./Todo.module.scss";
import TodoInput from "./TodoInput/todoInput";
import TodoList from "./TodoList/TodoList";

const Todo = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let prevTodos = JSON.parse(localStorage.getItem("todos") || "{}");
        if (prevTodos && prevTodos.length > 0) {
            setTodos(prevTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            let newTodo = { value: todo, active: true, id: todos.length + 1 };
            let newTodos = [...todos, newTodo];
            setTodos(newTodos);
            setTodo("")
            e.target.reset();
        }
    }

    const handleTodoActivity = (index) => {
        if (todos.length) {
            let newTodos = [...todos];
            newTodos[index].active = !newTodos[index].active;
            setTodos(newTodos);
        }
    }

    const handleDeleteTodo = (index) => {
        if (todos.length) {
            let newTodos = [...todos];
            newTodos.splice(index, 1);
            setTodos(newTodos);
        }
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleClearCompletedTodos = () => {
        if (todos.length) {
            let newTodos = [...todos];
            newTodos = newTodos.filter(element => element.active === true);
            setTodos(newTodos);
        }
    }

    const handleMakeAllTodosCompleted = () => {
        if (todos.length) {
            let newTodos = [...todos];
            newTodos = newTodos.map(element => {
                return {
                    ...element,
                    active: false,
                }
            })
            setTodos(newTodos);
        }
    }

    const handleMakeAllTodosActive = () => {
        if (todos.length) {
            let newTodos = [...todos];
            newTodos = newTodos.map(element => {
                return {
                    ...element,
                    active: true
                }
            })
            setTodos(newTodos);
        }
    }
    const handleEditTodo = (index, e) => {
        let newTodos = [...todos];
        newTodos[index].value = e.target.value;
        setTodos(newTodos);
    }
    return (
        <div className={ClassNames.Container}>
            <div className={ClassNames.MainContent}>
                <Header />

                <TodoInput
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleMakeAllTodosCompleted={handleMakeAllTodosCompleted}
                    handleMakeAllTodosActive={handleMakeAllTodosActive}
                />

                {
                    todos.length > 0 &&
                    <TodoList
                        todos={todos}
                        handleTodoActivity={handleTodoActivity}
                        handleDeleteTodo={handleDeleteTodo}
                        handleClearCompletedTodos={handleClearCompletedTodos}
                        handleEditTodo={handleEditTodo}
                    />
                }

                <Footer />
            </div>
        </div>
    )
}
export default Todo