import { FC, useEffect } from "react";
import type {} from "redux-thunk/extend-redux";
import { useTypedSelector } from "../hooks/useTypedSelecton";
import { UseActions } from "../hooks/useActions";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = UseActions();
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {loading && <h1>Fetching...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default UserList;
