"use client";

import { getGenres } from "@/api/response";
import { Genres } from "@/api/types";
import useResponse from "@/hooks/useResponse";
import { setStateMovie } from "@/store/slices/genreMovieSlice";
import { setStateTv } from "@/store/slices/genreTvSlice";
import { useDispatch } from "react-redux";

interface LayoutFetchProps {
  children: React.ReactNode;
}

const LayoutReq = ({ children }: LayoutFetchProps) => {
  const dispatch = useDispatch();

  const [dataMovie, isLoadMovie, errorsMovie] = useResponse(() =>
    getGenres("movie")
  );
  const [dataTv, isLoadTv, errorsTv] = useResponse(() => getGenres("tv"));
  dispatch(
    setStateMovie({ isLoad: isLoadMovie, errors: errorsMovie, data: dataMovie })
  );
  dispatch(setStateTv({ isLoad: isLoadTv, errors: errorsTv, data: dataTv }));
  return <>{children}</>;
};
export default LayoutReq;
