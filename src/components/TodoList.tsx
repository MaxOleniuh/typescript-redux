import { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelecton";
import { UseActions } from "../hooks/useActions";

const TodoList: FC = () => {
  const { page, error, limit, todos, loading } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodosPage } = UseActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.id} - {todo.title}
        </li>
      ))}

      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div onClick={() => setTodosPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid lightgray",
              padding: 10,
              cursor: "pointer"
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
