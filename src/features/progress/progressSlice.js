// Progress tracking feature slice (for future implementation)

export const progressActions = {
  updateProgress: (courseId, progress) => ({
    type: 'progress/updateProgress',
    payload: { courseId, progress },
  }),
  resetProgress: (courseId) => ({
    type: 'progress/resetProgress',
    payload: { courseId },
  }),
}

export const progressReducer = (state = {}, action) => {
  switch (action.type) {
    case 'progress/updateProgress':
      return {
        ...state,
        [action.payload.courseId]: action.payload.progress,
      }
    case 'progress/resetProgress':
      const newState = { ...state }
      delete newState[action.payload.courseId]
      return newState
    default:
      return state
  }
}

