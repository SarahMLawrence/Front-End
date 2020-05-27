//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const initialPost = {
    id: "",
    username: "",
    content: "",
    likes: "",
}

//============//
//  COMPONENT //
//============//
const PostList = ({ props, post }) => {

    return(
        <div>
            <p>Posts</p>
            <ul>
                {posts.map((post) => {
                    <li key={post.id} >
                        <h1>{post.username}</h1>
                    </li>
                })}
            </ul>
        </div>
    )
}