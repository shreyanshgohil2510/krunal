import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const openHandler = () => {
    window.open(
      `${window.location.href}hello`,
      "_blank",
      "width=500,height=500"
    );
  };
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event.data)
    });
  }, []);
  return (
    <>
    <Link to={'/hello'} >Helllo</Link>
      Home
      <button onClick={openHandler}>Open</button>
      <button>close</button>
    </>
  );
};

export default Home;
