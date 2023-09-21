import React from "react";

const Hello = () => {
  const callHandler = () => {
    window.opener.postMessage("Hello-world")
    window.close()
  };
  return <button onClick={callHandler}>close</button>;
};

export default Hello;
