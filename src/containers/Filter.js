import React from 'react';
import FilterComp from '../components/FilterComp'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/todoActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return{ 
  	onClick : () => { dispatch(setVisibilityFilter(ownProps.filter))}
  }
}

const Filter= connect(null,mapDispatchToProps)(FilterComp);

export default Filter


