import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editItem,
  recieveTodos,
} from "../../redux/thunks/todosThunk";
import Popup from "../popup/popup";
import "./ShowTodo.css";

const ShowTodo = ({ posts }) => {
  const [popup, setPopup] = useState(false);
  const [title, setTtitle] = useState(null);
  const [body, setBody] = useState(null);
  const [newsId, setNewsId] = useState(null);

  const dispatch = useDispatch();

  const deleteItem = (posts) => {
    dispatch(deleteTodo(posts));
  };

  // console.log("posts.id", posts.id);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      body,
    };

    payload.id = !newsId ? new Date().getTime() : newsId;

    try {
      if (!newsId) {
        await dispatch(addTodo(payload));
      } else {
        await dispatch(editItem(payload));
      }

      await dispatch(recieveTodos());
    } catch (error) {}
  };

  const resetInp = (e) => {
    e.preventDefault();
    setTtitle("");
    setBody("");
  };

  useEffect(() => {
    if (posts.id) {
      setNewsId(posts.id);
      setTtitle(posts.title);
      setBody(posts.body);
    }
  }, [posts]);

  return (
    <>
      <div className="todo_list">
        <h2>{posts.title}</h2>
        <span>{posts.body}</span>
        <span>{posts.id}</span>
        <div className="buttons_row">
          <span
            onClick={() => deleteItem(posts)}
            style={{ color: "red", cursor: "pointer" }}
          >
            Remove
          </span>
          <span
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => setPopup(true)}
          >
            Edit
          </span>
        </div>
      </div>
      <Popup
        popup={popup}
        submitForm={(e) => submitForm(e)}
        setBody={setBody}
        resetInp={(e) => resetInp(e)}
        setTtitle={setTtitle}
        setPopup={setPopup}
        title={title}
        body={body}
      />
    </>
  );
};

export default ShowTodo;
