import React from "react";

const SongList = (props) => {
  return (
    <div>
      <div>
        {props.songs.map((song) => (
          <div className="songList">
            <div>
              {song.artist} - {song.title}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;
