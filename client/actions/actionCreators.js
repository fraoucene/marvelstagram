// increment
export function increment(index, i) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(heroId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        heroId,
        author,
        comment
    }
}

// remove comment
export function removeComment(heroId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        heroId
    } 
}

// load heros data
export function fetchHeros(offset) {
    return {
        type: 'FETCH_HEROS',
        offset
    }
}
