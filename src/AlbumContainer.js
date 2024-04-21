import Album from "./Album";
import "./AlbumContainer.css";

function AlbumContainer(props) {
  const { state, setState } = props;

  // Display 'Loading...' if the state is empty
  if (state.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    // Render the AlbumContainer with mapped Album components
    return (
      <div className="AlbumContainer">
        {state.map((currAlbum, index) => (
          <Album
            // Pass down props to each Album component
            state={state}
            setState={setState}
            albumUser={currAlbum.userId}
            photoNo={currAlbum.id}
            pos={index + 1}
            title={currAlbum.title}
            key={index} // Use index as the key for rendering optimization
          />
        ))}
      </div>
    );
  }
}

export default AlbumContainer;
