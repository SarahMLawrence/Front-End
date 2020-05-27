//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialPost = {
  id: "",
  username: "",
  content: "",
  likes: "",
};

//============//
//  COMPONENT //
//============//
const PostList = ({ props, posts, updatePost }) => {
  console.log(posts);
  const [editing, setEditing] = useState(false);
  const [postToEdit, setPostToEdit] = useState(initialPost);
  const [postToAdd, setAddPost] = useState(initialPost);

  const editPost = (id) => {
    setEditing(true);
    setPostToEdit(id);
  };

  //PUT REQUEST -save
  const saveEditPost = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/posts/${postToEdit.id}`, postToEdit)
      .then(() => {
        setEditing(false);
        props.history.push("/postpage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete

  //Add
  const addPost = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/posts", addPost)
      .then((res) => {
        updatePost([...posts, postToAdd]);
      });
  };

  return (
    // <div>
    //   <p>Posts</p>
    //   <ul>
    //     {posts.map((post) => {
    //       <li key={post.id}>
    //         <h1>{post.username}</h1>
    //       </li>;
    //     })}
    //   </ul>
    // </div>

    <div className="colors-wrap">
      <p>Posts</p>
      <ul>
        {posts.map((posts) => (
          <li key={posts.content} onClick={() => postToEdit(posts.content)}>
            {/* <span>
              <h1>{posts.id}</h1>
              <h1>{posts.username}</h1>
            </span> */}

            <div>
              <h1>{posts.id}</h1>
              <h1>{posts.username}</h1>
              <h1>{posts.content}</h1>
              <h1>{posts.likes}</h1>
              <img>{posts.img}</img>

              <div className="button-row">
                <button type="submit">save</button>

                <button onClick={() => setEditing(false)}>cancel</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
{/* 
      const [editing, setEditing] = useState(false);
  const [postToEdit, setPostToEdit] = useState(initialPost);
  const [postToAdd, setAddPost] = useState(initialPost); */}
      <div className="addPost">
        <label>
          New Post:
          <input
            onChange={(e) =>
              setAddPost({ ...postToAdd, content: e.target.value })
            }
            value={postToAdd.content}
          />
        </label>


        <button className="addBtn" onClick={addPost}>
          Add Post
        </button>
      </div>
    </div>
  );
};
export default PostList;
