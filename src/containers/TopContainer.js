import React, { useState, useEffect } from "react";
import TopSongsList from "../components/TopSongsList";

const TopContainer = () => {
  //1. Define state
  const [songsList, setSongsList] = useState([]);

  //2. Define functionality
  async function fetchSongs() {
    const response = await fetch(
      "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    );
    const data = await response.json();
    setSongsList(data);
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <>
      <h1>UK top 20</h1>
      <TopSongsList songsList={songsList} />
    </>
  );
};

export default TopContainer;
