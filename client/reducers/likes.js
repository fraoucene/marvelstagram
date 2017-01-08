function likes(state = [], action) {

    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log("Incrementing Likes!!");
            let prevState = state[action.index] ? state[action.index] : 0;
            return {...state, [action.index] : prevState+1};
        default:
            return state;
    }
 
  return state;
}

export default likes;



