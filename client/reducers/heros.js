function heros(state = [], action) {
    switch(action.type) {
        case 'GET_HEROS_DATA_RECEIVED' :
            return action.data;

        default:
            return state;
    }
 
  return state;
}

export default heros;