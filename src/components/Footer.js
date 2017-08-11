import React from 'react';
import Filter from '../containers/Filter';

export default class Footer extends React.Component{
	render(){
		return(
				<div>
					Show : 
					<Filter filter="ALL"> All </Filter> ,
					<Filter filter="ACTIVE"> Active </Filter> ,
					<Filter filter="COMPLETED"> Completed </Filter> 
				</div>
			);
	}
}