import React from "react";
  
const Form = () => {
    return(
        <form>
        <input type="text" classNameNameName="todo-input" />
        <button classNameNameName="todo-button" type="submit">
          <i classNameNameName="fas fa-plus-square"></i>
        </button>
        <div classNameNameName="select">
          <select name="todos" classNameNameName="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;