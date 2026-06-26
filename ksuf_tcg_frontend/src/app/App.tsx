// import { useState } from 'react'

import "./App.css";

import { Hand } from "@features/hand";
import { Collection } from "@widgets/collection/ui/Collection";
import { CardGrid } from "@features/CardGrid";
import { KsufMembers } from "@shared/data/cards/characters";

function App() {
  return (
    <>
      <Collection />
      {/* <CardGrid cards={KsufMembers}/> */}
      {/* <Hand /> */}
    </>
  );
}

export default App;
