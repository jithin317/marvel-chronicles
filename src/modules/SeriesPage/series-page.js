import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../redux/features/seriesSlice";
import CharacterLoader from "../../components/loaders/character-loader";
import Pagination from "../../components/pagination/pagination";

export default function Series() {
  const dispatch = useDispatch();
  const { isLoading, series, error } = useSelector((state) => state.series);
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchSeries(limit, offset));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, offset]);

  console.log(series);

  return <div>SeriesPage</div>;
}
