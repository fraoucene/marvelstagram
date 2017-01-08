function loading(state = true, action) {
	switch (action.type) {
		case 'FETCH_HEROS':
			return true
		case 'GET_HEROS_DATA_RECEIVED':
			return false
		case 'GET_HEROS_DATA_ERROR':
			return false
		default:
			return state
		}
}

export default loading;