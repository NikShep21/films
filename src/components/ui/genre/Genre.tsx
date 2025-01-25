"use client";
import { useSelector } from "react-redux";
import styles from "./Genre.module.scss";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { genresMovieColors, genresTvColors } from "./genresColors";
interface propsTipe {
  idGenre: number;
  typeGenre: "movie" | "tv";
}
const genresSlice: { movie: "genresMovie"; tv: "genresTv" } = {
  movie: "genresMovie",
  tv: "genresTv",
};
const Genre = ({ idGenre, typeGenre }: propsTipe) => {
  const data = useSelector(
    (store: RootState) => store[genresSlice[typeGenre]].data
  );

  const [nameGenre, setNameGenre] = useState<string>("");
  useEffect(() => {
    if (data) {
      const genre = data.find((item) => item.id === idGenre);
      genre ? setNameGenre(genre.name) : setNameGenre("#000000");
    }
  }, []);

  return (
    <div
      className={styles.genre}
      style={{
        backgroundColor:
          typeGenre === "movie"
            ? genresMovieColors[nameGenre]
            : genresTvColors[nameGenre],
      }}
    >
      {nameGenre}
    </div>
  );
};

export default Genre;
