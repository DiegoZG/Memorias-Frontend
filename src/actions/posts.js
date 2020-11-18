import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_USER } from '../constants/actionsTypes';
import * as api from '../api';
import axios from 'axios'

export const getPosts = () => async(dispatch) => {

    try{
       const { data } = await api.fetchPosts();
       dispatch({ type: FETCH_ALL, payload: data})
     } catch(error) {
        console.log(error.message)
     }
}

export const createPost = (post) => async(dispatch) => {
   try{
      const { data } = await api.createPost(post);
      dispatch({type: CREATE, payload: data})
   }catch (error) {
      console.log(error)
   }
}

export const updatePost = (id, post) => async(dispatch) => {
   try{
         const { data } = await api.updatePost(id,post)

         dispatch( { type: UPDATE, payload: data })
   } catch (error) {
         console.log(error)
   }
}

export const deletePost = (id) => async(dispatch) => {
   try {
      await api.deletePost(id);
      dispatch({ type: DELETE, payload: id})   
   } catch(error) {
      console.log(error)
   }
}

export const likePost = (id) => async(dispatch) => {
   try{
      const { data } = await api.likePost(id);

      dispatch({ type: UPDATE, payload: data})
   } catch(error) {
      console.log(error)
   }
}

export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user');

   dispatch( { type: FETCH_USER, payload: res.data })
}