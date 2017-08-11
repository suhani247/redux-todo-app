import React from 'react';


export default class FilterComp extends React.Component{
	render(){
		return(
				<a href="#" onClick={ e => {
									  e.preventDefault();
									 {this.props.onClick()};
									}} > {this.props.children} </a>
			);
	}
}