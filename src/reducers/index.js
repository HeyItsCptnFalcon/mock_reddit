// uncomment to import your constants into your reducer
import { ADD_POST } from '../constants';


/**
 *    You may define your initialState as any data structure you'd like
 *    I have scaffolded it as an array of objects but you may choose to 
 *    do otherwise.
 */
const initialState = {
  posts: [],
  redirect: false
}


/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
        redirect: [...state.redirect, action.redirect]
      }
    default:
      return state;
  }
}

export default rootReducer;