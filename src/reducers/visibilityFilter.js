const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'CHANGE_VISIBILITY':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter