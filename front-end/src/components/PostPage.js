//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//============//
//  COMPONENT //
//============//
const PostPage = (props) => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/posts')
        .then((res) => {
            setPostList(res.data);
        })
        .catch((err) => {
            console.log(err);
            alert("Error", props);
        });
    }, [props]);

    return (
        <>
        </>
    );
};

export default PostPage;