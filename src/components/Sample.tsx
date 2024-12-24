import React, { useContext } from "react";
import { ContextData } from "../context/ApiContext"; // Import the context

const DisplayUserInfo: React.FC = () => {
  const context = useContext(ContextData); // Get the context value
  console.log(context);
  return (
    <div>
      <h1>Name: {context.name}</h1>
      <h2>Age: {context.aga}</h2>
    </div>
  );
};

export default DisplayUserInfo;
