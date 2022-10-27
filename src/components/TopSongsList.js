import React from "react";
import Song from "../components/Song";

const TopSongsList = ({ songsList }) => {
  console.log(songsList.feed);
  console.log(songsList.feed.entry[0]["im:name"]);
};

export default TopSongsList;

// const songNodes = songsList.feed.entry.map((song) => {
//     return <Song key={song.id["attributes"]["im:id"]} song={song} />;
//   });
//   return <ul songs={songNodes}></ul>;
