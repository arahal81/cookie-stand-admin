import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Main from "../components/Main";
export default function Home() {
  // const changebranch = {
  //   id: 1,
  //   location: "",
  //   maxCustomers: 0,
  //   minCustomers: 0,
  //   avgCookies: 0,
  // };
  const [branchesdeatail, setBranchesDeatail] = useState([]);

  function submitBranchHandler(event) {
    event.preventDefault();

    console.log("submit");
    const branch = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value || 0,
      maxCustomers: event.target.maxCustomers.value || 0,
      avgCookies: event.target.avgCookies.value || 0,
      id: branchesdeatail.length + 1,
    };

    setBranchesDeatail([...branchesdeatail, branch]);
    console.log(branch);
    // setBranches((branches) => [...branches, branch]);
  }

  // function changeHandler(event) {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   setBranchesDeatail({ ...branchesdeatail, [name]: value });
  // }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />
      <Form
        submitBranchHandler={submitBranchHandler}
        // changeHandler={changeHandler}
      />
      <Main branches={branchesdeatail} />
      <Footer />
    </div>
  );
}
