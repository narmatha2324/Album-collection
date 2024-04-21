import { Route, Routes as Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AlbumContainer from "./AlbumContainer";
import Navbar from "./Navbar";
import CreateAlbum from "./CreateAlbum";
import UpdateAlbum from "./UpdateAlbum";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const jsonData = await response.json();
        setState(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/"
          element={<AlbumContainer state={state} setState={setState} />}
        />
        <Route
          path="/createAlbum"
          element={<CreateAlbum state={state} setState={setState} />}
        />
        <Route
          path="/update-album/:pos"
          element={<UpdateAlbum state={state} setState={setState} />}
        />
      </Switch>
    </div>
  );
}

export default App;
