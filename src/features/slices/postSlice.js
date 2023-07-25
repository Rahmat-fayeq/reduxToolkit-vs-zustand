import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostsAsync = createAsyncThunk('post/getPostsAsync', async ()=>{
    const response = await fetch('http://localhost:3000/posts');
    return response.json();
});

export const addPostsAsync = createAsyncThunk('post/addPostsAsync', async (data)=>{
    const response = await fetch('http://localhost:3000/posts',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          'Accept': 'application/json',  
        },
        body: JSON.stringify({id:data.id,title: data.title}
    )});
    return response.json();
});


const postSlice = createSlice({
    name:'post',
    initialState:{
        posts : [],
        isLoading: false,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(getPostsAsync.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getPostsAsync.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(getPostsAsync.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(addPostsAsync.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addPostsAsync.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(addPostsAsync.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.posts = [action.payload, ...state.posts];
            // state.posts.push(action.payload);
        })
    }
});
export const {addPost} = postSlice.actions;
export default postSlice.reducer;