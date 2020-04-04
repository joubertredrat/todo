import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer
