import React, {useState} from "react";
import "./ToDoList.css";

//create your first component
const TodoList = () => {
	const [inputToDo, setInputToDo ] = useState('');
	const [toDoArr, setToDoArr] = useState([]);

	const showDelete = (id) =>{   //to show delete buttons
		document.getElementById(id).className ="col-1";
    };
	const hideDelete = (id) =>{   //to show delete buttons
		document.getElementById(id).className ="col-1 d-none";
    };

	const addToDo = (e, newToDo) =>{   //to add a new item on ToDo list
		if (e.key === 'Enter') {
			setToDoArr (toDoArr => ([...toDoArr, newToDo]));
			setInputToDo("");
		  } 
        
    };

	const deleteToDo = (i) =>{   //to add a new item on ToDo list
		setToDoArr (toDoArr.filter((item, index) => i!==index)); 
        
    };

	const createTodoList = () =>{   //to show the ToDo list
		if (toDoArr.length>0) {
			//Show list
		}else{
			return(<p>There's no tasks on the list, please add a task</p>);
		}
        
    };

	

	return (
		<div className="container-fluid bg-secondary p-2">
			<h1 className="text-center text-info">TO-DO's</h1>            

			<ul className="list-group list-group-flush text-light">
				<li className="list-group-item list-group-item-dark" >
					<div className="form">
						<div className="row">
							<div className="col">
								<input type="text" className="form-control-plaintext" onChange={e => setInputToDo(e.target.value)} value={inputToDo} placeholder="To do..." onKeyDown={e => addToDo(e, inputToDo)} autoFocus/>
							</div>							
						</div>
					</div>
				</li>
				{toDoArr.length ? toDoArr.map((toDoItem, i) => (
					<li className="list-group-item list-group-item-action list-group-item-dark" onMouseOver={()=>showDelete(i)}  onMouseOut={()=>hideDelete(i)} >
						<div className="form">
							<div className="row">
								<div className="col">
									<input type="text"  className="form-control-plaintext" value={toDoItem} />
								</div>
								<div className="col-1 d-none" id={i}>
									<button className="btn btn-outline-danger" type="button" data-toggle="tooltip" data-placement="top" title="Delete To-do" onClick={()=>deleteToDo(i)}>X</button>
								</div>
								
							</div>
						</div>
					</li>
 				)) : <p className="m-2">There's no tasks on the list, Let's add a task!</p>}
				
			</ul>
			</div>
	);
};

export default TodoList;
