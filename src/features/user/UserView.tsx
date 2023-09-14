import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";

import { fetchUsers } from "./userSlice";

const UserView = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h2>List of user</h2>
      {data.loading && <div>Loading ....</div>}
      {!data.loading && data.error ? <div>Error : {data.error}</div> : null}
      {!data.loading && data.users.length ? (
        <ul>
          {data.users.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
};

export default UserView;
