import React, { useState } from 'react'
import ClassNames from "./TodosList.module.scss";

function TodoElement({ element, index, handleDeleteTodo, handleTodoActivity, handleEditTodo }) {
    const [needsToChangeValue, setNeedsToChangeValue] = useState(false);
    function handleDblClick() {
        setNeedsToChangeValue(prevState => !prevState);
    }
    return (
        <li className={ClassNames.TodoElement}>
            <div className={ClassNames.Container}>

                {/* The Completed Check Mark First  */}
                {
                    <div className={ClassNames.CompletedIcon} onClick={() => handleTodoActivity(index)}>
                        {element.active === false ? <button className={ClassNames.CheckButton}><i className="fas fa-check "></i> </button> : null}
                    </div>
                }

                {/* The Todo Value . the user can edit it by dbl clicking */}
                {
                    <div className={ClassNames.ValueContainer} onDoubleClick={handleDblClick}>
                        {
                            needsToChangeValue ?
                                <form onSubmit = {handleDblClick}>
                                    <input defaultValue={element.value} className={ClassNames.FormControl} onChange={(e) => handleEditTodo(index, e)} />
                                </form>
                                :
                                <label className={element.active ? ClassNames.ActiveTodo : ClassNames.CompletedTodo}>{element.value}</label>
                        }
                    </div>
                }
            </div>

            {/* The Delete Todo Button */}
            <button className={ClassNames.DeleteButton} onClick={() => handleDeleteTodo(index)}> <i className="fas fa-times"></i></button>
        </li>
    )
}

export default TodoElement
