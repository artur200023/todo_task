import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../../redux/slices/todo";
import { addTodo, recieveTodos } from "../../redux/thunks/todosThunk";
import "./todo.css";
import ShowTodo from "../showTodo/ShowTodo";

const Todo = () => {
  const [title, setTtitle] = useState("");

  const dispatch = useDispatch();

  const postList = useSelector(selectPost);

  const addTodos = () => {
    const payload = {
      id: new Date().getTime(),
      title: title,
    };
    dispatch(addTodo(payload));

    setTtitle("");
    dispatch(recieveTodos());
  };

  useEffect(() => {
    dispatch(recieveTodos());
  }, [dispatch]);

  return (
    <>
      <div className="add_section">
        <input
          value={title}
          onChange={(e) => setTtitle(e.target.value)}
          type="text"
        />

        <button onClick={() => addTodos(title)}>Add</button>
      </div>

      {postList.map((posts) => (
        <ShowTodo
          key={posts.id}
          posts={posts}
          id={posts.id}
          title={posts.title}
        >
          {" "}
        </ShowTodo>
      ))}
    </>
  );
};

export default Todo;
