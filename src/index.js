import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList.js";


var destination = document.querySelector("#container"); //assigns container in html file as destination

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
); //renders todolist inside our destination(container variable)
