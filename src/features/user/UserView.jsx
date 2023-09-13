import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    // setTimeout(() => {
    //   dispatch(fetchUsers());
    // }, 2000);
    // dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2>List of user</h2>
      {data.loading && <div>Loading ....</div>}
      {!data.loading && data.error ? <div>Error : {data.error}</div> : null}
      {!data.loading && data.users.length ? (
        <ul>
          {data.users.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
};

export default UserView;
