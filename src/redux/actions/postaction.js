import {FETCH_POSTS} from '../constants/types';

export const fetchPost = ()=> dispatch =>{
console.log("fetching");
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=> res.json())
        .then(posts => dispatch({
             type: FETCH_POSTS,
             payload: posts
            })
        );
    };