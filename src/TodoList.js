import React from "react";
let todoList = [
    {
        id: 1,
        title: "Complete assignment"
    },
    {
        id: 2,
        title: "Finish course"
    },
    {
        id: 3,
        title: "Build CV"
    }
]

const TodoList = () => {
    return (
        <ul>
            {todoList.map( (item) => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
}

export default TodoList