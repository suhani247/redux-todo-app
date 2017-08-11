import { connect } from 'react-redux';
import TodoListComp from '../components/todoList.js';
import { toggleTodo} from '../actions/todoActions.js';

const mapStateToProps = state => {
	return{
		items : state
	}
}

const mapDispatchToProps = dispatch => {
	return{
		toggleItem : (id) => {dispatch(toggleTodo(id))}
	}
}

const TodoList = connect(
		 mapStateToProps,
  		 mapDispatchToProps
	)(TodoListComp);

export default TodoList
