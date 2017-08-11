import { connect } from 'react-redux';
import TodoListComp from '../components/todoList.js';
import { toggleTodo} from '../actions/todoActions.js';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(t => !t.active)
    case 'ACTIVE':
      return todos.filter(t => t.active)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
	return{
		items : getVisibleTodos(state.todos, state.visibilityFilter)
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
