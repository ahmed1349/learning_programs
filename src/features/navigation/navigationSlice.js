// Navigation feature slice (for future state management if needed)

export const navigationActions = {
  setCurrentPage: (page) => ({
    type: 'navigation/setCurrentPage',
    payload: page,
  }),
}

export const navigationReducer = (state = { currentPage: 'home' }, action) => {
  switch (action.type) {
    case 'navigation/setCurrentPage':
      return { ...state, currentPage: action.payload }
    default:
      return state
  }
}

