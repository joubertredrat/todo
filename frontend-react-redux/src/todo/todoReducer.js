const INITIAL_STATE = {
  description: 'Anything',
  list: [{
    _id: 1,
    description: 'Todo 01',
    done: true
  }, {
    _id: 2,
    description: 'Todo 02',
    done: false
  }, {
    _id: 3,
    description: 'Todo 03',
    done: false
  }, {
    _id: 4,
    description: 'Todo 04',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
      case 'TODO_SEARCHED':
        return { ...state, list: action.payload.data }
    default:
      return state
  }
}
