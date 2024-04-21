import "./Album.css";
import { Link } from "react-router-dom";

function Album(props) {
  const { photoNo, title, albumUser, state, setState, pos } = props;

  // Function to handle the delete button click event
  const handleDelete = (e) => {
    // Retrieve the index from the data-index attribute of the clicked button
    const index = e.target.dataset.index - 1;
    
    // Remove the album from the state based on the retrieved index
    state.splice(index, 1);
    
    // Create a new copy of the state array
    let newState = [...state];
    
    // Send a DELETE request to the API to delete the album
    fetch(`https://jsonplaceholder.typicode.com/albums/${photoNo}`, {
      method: "DELETE",
    });
    
    // Update the state with the modified array after deletion
    setState(newState);
  };

  return (
    <div className="album">
      <div className="albumdetails">
        <h4>Album User - {albumUser}</h4>
        <h4> PhotoNo - {photoNo} </h4>
        Title - {title}
      </div>
      <div className="btn-ctn">
        {/* Link to the update album page */}
        <Link to={`/update-album/${pos - 1}`}>
          <button id="update" data-index={pos}>
            Update
          </button>
        </Link>
        {/* Button to delete the album */}
        <Link to="/">
          <button id="delete" data-index={pos} onClick={handleDelete}>
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Album;
