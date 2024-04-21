import { useState } from "react";
import "./CreateAlbum.css";

function CreateAlbum(props) {
  // State variables to hold userId, photoNo, and title
  let [userId, setUserId] = useState("");
  let [photoNo, setPhotoNo] = useState("");
  let [title, setTitle] = useState("");

  // Destructuring props to access state and setState
  let { state, setState } = props;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new album object with the input values
    const currAlbum = {
      userId: userId,
      id: photoNo,
      title: title,
    };

    // Send a POST request to add the new album to the API
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify(currAlbum),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); // Log the response from the API

    // Add the new album to the beginning of the state array
    state.unshift(currAlbum);

    // Update the state with the modified array
    setState(state);

    // Clear the input fields after form submission
    setUserId("");
    setPhotoNo("");
    setTitle("");
  };

  return (
    <div className="createPost">
      <h1>Create Post</h1>
      <form className="form-field" onSubmit={handleSubmit}>
        {/* Input fields for userId, photoNo, and title */}
        <label>User Id - </label>
        <input
          type="text"
          placeholder="Enter userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label>Photo No - </label>
        <input
          type="text"
          placeholder="Enter Photo No."
          value={photoNo}
          onChange={(e) => setPhotoNo(e.target.value)}
        />
        <label>Title - </label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Button to submit the form */}
        <div className="btn-container">
          <button className="create-post-btn">Create Album</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAlbum;
