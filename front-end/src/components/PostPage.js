//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PostList from "../components/PostList";
//============//
//  COMPONENT //
//============//
const PostPage = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/posts")
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
      <PostList props={props} posts={postList} updatePost={setPostList} />
    </>
  );
};

export default PostPage;
