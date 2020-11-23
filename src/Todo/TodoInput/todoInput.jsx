import React, { useState } from 'react'
import ClassNames from "./TodoInput.module.scss";
function TodoInput({handleChange , handleSubmit , handleMakeAllTodosCompleted , handleMakeAllTodosActive}) {
    const [areTodosActive , setTodosActive ] = useState(false);
    
    function handleClick (){
       areTodosActive ? handleMakeAllTodosCompleted():handleMakeAllTodosActive () ;
       setTodosActive(prevState => !prevState);
    }

    return (
        <form onSubmit={handleSubmit} className={ClassNames.Form}>
            <label className={ClassNames.Label} htmlFor = {"todoInput"}>
                <span onClick = {handleClick}><i className="fas fa-angle-down"></i></span>
                <input onChange={(e) => handleChange(e)} placeholder="What needs to be done !? " className={ClassNames.FormControl}/>
            </label>
        </form>
    )
}

export default TodoInput