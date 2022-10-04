import React, { useState } from "react";
import Pop from "./pop";
import "./App.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

const App = () => {
 

  return (
    <div className="bd">
      <nav className="nav"><p className="p">Popups</p>
      <span className="log">Logout  <span className="oo"> <AiOutlineLogout/></span></span>
      </nav>
      <h1 className="h1">Welcome User <AiOutlineUserAdd />  !!</h1>

      <Pop/>
    </div>
  );
};

export default App;
