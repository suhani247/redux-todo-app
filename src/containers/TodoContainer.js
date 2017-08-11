import { connect } from 'react-redux';
import TodoAddComp from '../components/todo.js';
import { addTodo } from '../actions/todoActions.js';

const mapStateToProps = state => {
	return{
		items : state
	}
}

const mapDispatchToProps = dispatch => {
	return{
		addTodoItem : (text) => {dispatch(addTodo(text))},
	}
}

const TodoAdd = connect(
		 mapStateToProps,
  		 mapDispatchToProps
	)(TodoAddComp);

export default TodoAdd
