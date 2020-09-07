import React, {Component} from "react";
import ToDoItems from "./ToDoItems.js";
import "./ToDoList.css";

//returns UI elements, header, inputs and submit button
class ToDoList extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._inputElement.value !== " "){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = ""; //clearing input line for next todolist item
        }

        console.log(this.state.items);

        e.preventDefault(); //forms normally reloads the whole page, hence we cancel out their default behavior
    }

    deleteItem(key)
    {
        var filteredItems = this.state.items.filter(function (item){return (item.key !== key);} ); //create new array filteredItems that returns everything except the clicked items

        this.setState({items:filteredItems}); //sets new state as filterItems
    }

    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit = {this.addItem}>
                        <input ref = {(a) => this._inputElement = a}
                            placeholder="Enter Task">
                        </input>
                        <button type = "submit">Add</button>
                    </form>
                </div>
                <ToDoItems entries = {this.state.items}
                           delete = {this.deleteItem}/>

            </div>

        );
    }
};

export default ToDoList;