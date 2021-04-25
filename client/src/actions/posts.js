import * as api from '../api'

// Action creators
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch(error) {
        console.log(error.message);
    }
}

export const createPosts = newPost => async (dispatch) => {
    try {
        await api.createPost(newPost)
        dispatch({ type: 'CREATE', payload: newPost})
    } catch (error) {
        console.log(error.type)
    }
}