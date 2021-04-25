import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'

const Post = () => {
    const classes = useStyles()
    const posts = useSelector(state => state.posts)

    console.log('Posts', posts);
    
    return (
        <>
            <h2>Post!</h2>
        </>
    )
}

export default Post