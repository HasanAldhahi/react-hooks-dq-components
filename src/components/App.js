import React from "react";
import TopMenu from "./TopMenu.js";
import SideMenu from "./SideMenu.js";
import Search from "./Search.js";
import MenuLinks from "./MenuLinks.js";
import Logo from "./Logo.js"
import GenrePicker from "./GenrePicker.js";



function App() {



  return (<div className="app-container">

    <SideMenu></SideMenu>
    <TopMenu></TopMenu>
    <GenrePicker></GenrePicker>

  </div>

  );

}

export default App;


