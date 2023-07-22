import { createContext } from "react";
import Login from "../user/pages/Login";
import Register from "../user/pages/Register";

export const AuthContext = {
  isLogin: false,
  login: Login,
  register: Register,
};
