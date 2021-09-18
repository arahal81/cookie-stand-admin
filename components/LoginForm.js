import { useState } from "react";

export default function LoginForm(props) {
  // const initialValues = {
  //   username: "",
  //   password: "",
  // };

  // const [values, setValues] = useState(initialValues);

  function submitHandler(event) {
    event.preventDefault();
    const values = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    props.loginHandler(values);
  }

  // function inputChangeHandler(event) {
  //   let { name, value } = event.target;

  //   setValues({ ...values, [name]: value });
  // }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-7/12 p-2 p-8 m-20 ml-auto mr-auto bg-green-300 border-green-500 rounded-3xl"
      >
        <label className="p-2 text-center ">username</label>
        <br />
        <input
          className="w-full p-1 rounded-xl"
          type="text"
          name="username"
          id="username"
          placeholder="User Name"
        />
        <br />

        <label className="p-2 text-center">password</label>
        <br />
        <input
          className="w-full p-1 rounded-xl"
          type="password"
          placeholder="Password"
          id="password"
          required
        />
        <br />

        <button
          type="submit"
          className="w-full px-10 py-3 mt-10 text-white bg-green-500 rounded-xl hover:text-green-700 hover:bg-green-100 "
        >
          sign in
        </button>
      </form>
    </div>
    // <form onSubmit={submitHandler}>
    //   <div>
    //     <label htmlFor="username">User Name</label>
    //     <input
    //       type="text"
    //       name="username"
    //       id="username"
    //       value={values.username}
    //       onChange={inputChangeHandler}
    //       placeholder="User Name"
    //     />
    //   </div>

    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       id="password"
    //       value={values.password}
    //       onChange={inputChangeHandler}
    //       placeholder="password"
    //     />
    //   </div>

    //   <button type="submit">Sign In</button>
    // </form>
  );
}
