import axios from 'axios';
import  *  as CONSTANTS from "./constants";

const dataService = store => next => action => {
  	next(action)
  	switch (action.type) {
	  	case 'FETCH_HEROS':
			axios.get(
			  	CONSTANTS.BASE_URL + CONSTANTS.HEROS_URL,
			  	{
			     headers: {
			        'Accept': 'application/json'
			      },
			     params: {
			    	[CONSTANTS.TIME_STAMPE_KEY]: CONSTANTS.TIME_STAMPE_VALUE,
			    	[CONSTANTS.API_PUBLIC_KEY]: CONSTANTS.API_PUBLIC,
			    	[CONSTANTS.HASH_KEY]: CONSTANTS.HASH_VALUE,
			    	[CONSTANTS.OFFSET_KEY]: action.offset,
			    	[CONSTANTS.LIMIT_KEY]: CONSTANTS.LIMIT_VALUE,
			  	}
			})
	      	.then((res, err) => {
		        if (err) {
		          return next({
		            type: 'GET_HEROS_DATA_ERROR',
		            err
		          })
		        }
		        const data = res.data.data;
		        next({
		          type: 'GET_HEROS_DATA_RECEIVED',
		          data
	        	})
	      	})
	    	break
	  	default:
	    	break
  }

};

export default dataService