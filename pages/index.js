import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Main from "../components/Main";
export default function Home() {
  function createCookieHandler(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />
      <Form submitHandler={createCookieHandler} />
      <Main />
      <Footer />
    </div>
  );
}
