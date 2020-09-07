import React, {Component} from "react";

class ToDoItems extends Component{
    
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
        
    }

    createTasks(item){
        return <li onClick = {() => this.delete(item.key)}
                    key = {item.key}>
                        {item.text}
                        </li>
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className = "theList">
                {listItems}
            </ul>
        );
    }

    delete(key){
        this.props.delete(key);
    }
};

export default ToDoItems;