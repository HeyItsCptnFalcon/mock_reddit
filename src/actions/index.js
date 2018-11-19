// uncomment to import your constants into your actions
import { ADD_POST } from '../constants'

/**
 *    Create your action creators here:
 *    > Should return an object with at least a 'type' attribute
 *    > Don't forget to export your functions
 */
let id = 0;

  export const addPost = post =>  ({
    type: ADD_POST,
    post: {
      ...post,
      id: '' + id++,
      timeOfPost: new Date(),
      upVotes:0,
      downVotes:0,
      comments:[]
    },
    redirect:true 
  })
