import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Main from "../components/Main";
export default function Home() {
  const changebranch = {
    id: 1,
    location: "",
    maxCustomers: 0,
    minCustomers: 0,
    avgCookies: 0,
  };
  const [branchesdeatail, setBranchesDeatail] = useState(changebranch);

  function submitBranchHandler(event) {
    event.preventDefault();

    console.log("submit");
    const branch = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
      id: branchesdeatail.length + 1,
    };

    const { name, value } = branch;

    setBranchesDeatail({ ...branchesdeatail, [name]: value });
    console.log(branchesdeatail);
    // setBranches((branches) => [...branches, branch]);
  }

  function changeHandler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setBranchesDeatail({ ...branchesdeatail, [name]: value });
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Cookie Stand Admin" />
      <Form
        submitBranchHandler={submitBranchHandler}
        changeHandler={changeHandler}
      />
      <Main branches={branchesdeatail} />
      <Footer />
    </div>
  );
}
