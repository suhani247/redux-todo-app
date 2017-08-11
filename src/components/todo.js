import React from 'react'; 

export default class TodoAddComp extends React.Component{
	render(){
		let input;
		return(
				<div>
					<form onSubmit = { e => {
						e.preventDefault();
						if(input.value=='')
							return;
						this.props.addTodoItem(input.value);
						input.value='';
					}}>
					<input type="text" ref={node => {
          												input = node 
        											}}/>
					<button type="submit"> Add Item </button>
					</form>
					
					
				</div>
			);
	}
}