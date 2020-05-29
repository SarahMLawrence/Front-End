//============//
//  IMPORTS   //
//============//
import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  TabContent,
} from "reactstrap";

//====================//
//  SET INITIAL POST  //
//====================//
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

  //=========================//
  //   PUT REQUEST - SAVE    //
  //=========================//
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

  //=========================//
  // DELETE REQUEST - DELETE //
  //=========================//
  const deletePost = (post) => {
    axiosWithAuth().delete(`/posts/${post.id}`);
    props.history.push("/postpage");
  };

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
    <div className="App">
      <header className="App-header">
        <div>
          {posts.map((element, key) => {
            console.log(element);

            return (
              <Card className="card">
                {/* <CardBody className="body">
                    <CardTitle>{element.id}</CardTitle>
                  </CardBody> */}

                <CardBody>
                  <CardTitle>{element.id}</CardTitle>
                  <CardSubtitle>{element.username}</CardSubtitle>
                  <CardText key={element.id}>
                    {element.content} <br></br>Likes: {element.likes}
                  </CardText>

                  {/* <Link to="#">{element.likes}</Link>

                    <Link to="#">Comment </Link> */}
                </CardBody>
              </Card>
            );
          })}
          <div>
            <label>
              content:
              <input
                onChange={(e) =>
                  setAddPost({ ...postToAdd, element: e.target.value })
                }
                value={postToAdd.element}
              />
            </label>
            <button className="addBtn" onClick={addPost}>
              Add Post
            </button>
          </div>
        </div>
      </header>

      {/* <Switch>
          <Route path="/userlogin">
            <LogIn />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> */}
    </div>
  );
};
export default PostList;
