import React from "react";
import { connect } from "react-redux/es/exports";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for : </h3>
      <p>
        {" "}
        TItle: {song.title}
        <br></br>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
