const todos = (state=[],action) => {
	switch(action.type){
		case 'ADD_TODO' : return [
			...state,
			{
				id : action.id,
				task : action.text,
				active : true 
			}
		];

	 	case 'TOGGLE_TODO' : return state.map((todo) => {
	 		if(todo.id===action.id)
	 			return {...todo, active : !todo.active}
	 		else
	 			return todo;
	 	});

	 	default : return state;
	}
}

export default todos;