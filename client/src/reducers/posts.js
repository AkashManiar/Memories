// Do all the payload manipulations here in reducer, not in action

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload

        case 'CREATE':
            return [...posts, action.payload]
            
        default:
            return posts

    }
}

export default postReducer