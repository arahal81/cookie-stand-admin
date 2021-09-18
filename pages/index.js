import Head from "next/head";
import LoginForm from "../components/LoginForm";
import CookieStandAdmin from "./CookieStandAdmin";
import { useState } from "react";
import { getToken } from "../assets/fetcher";
export default function Home() {
  const [token, setToken] = useState();

  const [username, setUsername] = useState("");

  async function loginHandler(values) {
    const fetchedToken = await getToken(values);

    setToken(fetchedToken);

    setUsername(values.username);
  }

  function logoutHandler() {
    setToken(null);
  }
  return token ? (
    <CookieStandAdmin
      token={token}
      logoutHandler={logoutHandler}
      username={username}
    />
  ) : (
    <LoginForm loginHandler={loginHandler} />
  );
}
