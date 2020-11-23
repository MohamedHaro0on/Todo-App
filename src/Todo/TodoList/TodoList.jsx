import { useState, memo } from 'react'
import { Button } from '../../UI/UI';
import TodoElement from './TodoElement';
import ClassNames from "./TodosList.module.scss";

function TodoList({ todos, handleTodoActivity, handleDeleteTodo, handleClearCompletedTodos , handleEditTodo }) {


    const [state, setState] = useState({
        needsToChangeValue: false,
        displayAll: true,
        displayActive: false,
        displayCompleted: false,
    });
    let numberOfActiveTodos = 0;

    // Starting the Functions :: 



    function handleDisplyAllTodos() {
        setState({
            ...state,
            displayAll: true,
            displayCompleted: false,
            displayActive: false,
        })
    }

    function handleDisplayActiveTodos() {
        setState({
            ...state,
            displayActive: true,
            displayAll: false,
            displayCompleted: false,
        })
    }

    function handleDisplayCompletedTodos() {
        setState({
            ...state,
            displayActive: false,
            displayAll: false,
            displayCompleted: true,
        })
    }

    return (
        <ul className={ClassNames.TodoList}>
            {todos.map((element, index) => {

                // if the todo element is in active state increament the number of active todos ; 
                element.active && numberOfActiveTodos++;

                if (state.displayAll || (state.displayActive && element.active) || (state.displayCompleted && !element.active)) {
                    return (
                        <TodoElement 
                            key={element.id} 
                            element={element} 
                            index={index} 
                            handleDeleteTodo={handleDeleteTodo} 
                            handleTodoActivity={handleTodoActivity}  
                            handleEditTodo = {handleEditTodo} 
                        />
                    ) 
                }
                else {
                    return null;
                }
            })}


            {/* The Controls ::  */}
            <footer key={"controls"} className={ClassNames.TodoElement}>
                <Button>{numberOfActiveTodos} items left .</Button>
                <div>
                    <Button onClick={handleDisplyAllTodos}> All </Button>
                    <Button onClick={handleDisplayActiveTodos}> Active </Button>
                    <Button onClick={handleDisplayCompletedTodos}> Completed</Button>
                </div>
                <Button onClick={handleClearCompletedTodos}> Clear Completed</Button>
            </footer>
        </ul>
    )
}

export default memo(TodoList);