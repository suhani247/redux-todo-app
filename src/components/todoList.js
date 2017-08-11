import React from 'react'; 

export default class TodoListComp extends React.Component{
	render(){
				return(	<ul>
						{this.props.items.map((item) => {
							return (<li key={item.id} onClick={() => this.props.toggleItem(item.id)} style={{textDecoration : !item.active ? "line-through" : "none" }}> {item.task} </li>)
						})}
					</ul>
			);
		}
	}