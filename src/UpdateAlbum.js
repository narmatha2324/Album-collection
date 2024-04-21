import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./UpdateAlbum.css";
import { useNavigate } from "react-router-dom";

const UpdateAlbum = (props) => {
  // Get the 'pos' parameter from the URL
  const { pos } = useParams();

  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Destructure props to access state and setState
  let { state, setState } = props;

  // State variables to hold newUserId and newAlbumTitle
  let [newUserId, setNewUserId] = useState("");
  let [newAlbumTitle, setNewAlbumTitle] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the userId and title of the specific album in state based on 'pos'
    state[pos].userId = newUserId;
    state[pos].title = newAlbumTitle;

    // Create a new state array with the modified album
    let newState = [...state];

    // Send a PATCH request to update the specific album on the API
    fetch(`https://jsonplaceholder.typicode.com/albums/${pos + 1}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: newAlbumTitle,
        userId: newUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); // Log the response from the API

    // Update the state with the modified newState
    setState(newState);

    // Navigate to the root path after form submission
    navigate(`/`);
  };

  return (
    <div className="update-album">
      <form onSubmit={handleSubmit} className="form-field">
        {/* Input fields for updating userId and album title */}
        <label>Update User Id</label>
        <input
          placeholder="Enter new userId"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <label>Update Album Title</label>
        <input
          placeholder="Enter new Album Title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        {/* Button to submit the form */}
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateAlbum;
