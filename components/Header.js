import React from "react";

export default function Header(props) {
  return (
    <header className="p-4 bg-green-500 text-3xl ">
      <h1 className="border-gray 50">{props.title}</h1>
    </header>
  );
}
