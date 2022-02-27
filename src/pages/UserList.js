import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = (props) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=884686465de3838aebbea32efd9ef4b6&language=fr-FR&external_source=imdb_id`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>❤️</span>
      </h2> 
      <div className="result">
          { listData.length > 0 ? listData.map((movie) => <Card movie={movie} key={movie.id} />) : <h2>Vide</h2>}
      </div>
    </div>
  );
};

export default UserList;
