/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
// import { jsx } from "@emotion/react";

const UserContextProvider = ({ children }) => {
  // const getData = () => {
  //   const lists = localStorage.getItem("list");

  //   if (lists) {
  //     return JSON.parse(localStorage.getItem("list"));
  //   } else {
  //     [];
  //   }
  // };
  const [boy, setBoy] = useState( () => {
     const data = localStorage.getItem("user");

     return data ? JSON.parse(data) : []
  });

  useEffect(() => {
     localStorage.setItem("user", JSON.stringify(boy))
  }, [boy])

  useEffect(() => {
    localStorage.setItem("mail", JSON.stringify(boy.mail))
 }, [boy])

  return (
    <UserContext.Provider value={{ boy, setBoy }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
