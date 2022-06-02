import React from "react";

import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";

function MainContent() {
  return (
    <main>
      <TopMenu></TopMenu>
      <GenrePicker></GenrePicker>
      <AlbumList></AlbumList>
    </main>
  );
}

export default MainContent;
