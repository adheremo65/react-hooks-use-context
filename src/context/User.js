import user from "../data";
import { useContext } from "react";
import Interests from "../components/Interests";
import React from "react";

const UserContext = React.createContext();
function UserProvider({ user }) {
  return <UserContext.Provider value={user}> {user} </UserContext.Provider>;
}
export { UserContext, UserProvider };
