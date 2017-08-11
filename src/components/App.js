import React from 'react'
import TodoAdd from '../containers/TodoContainer'
import TodoList from '../containers/TodoListContainer'

export default class App extends React.Component{
	render(){
		return(
				<div>
				<TodoAdd/>
				<TodoList/>
				</div>
			);
	}
}