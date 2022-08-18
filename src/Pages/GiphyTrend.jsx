import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyTrend } from "../store/actions/giphyTrend";

const GiphyTrend = () => {
  const dispatch = useDispatch();

  const { giphyTrend } = useSelector((state) => state.giphyTrend);
  console.log(giphyTrend);

  useEffect(() => {
    dispatch(fetchGiphyTrend());
  }, []);

  return (
    <div className="container gifs">
      {giphyTrend?.data?.map((g, i) => {
        return (
          <div key={i} className="gif">
        <img src={g?.images?.fixed_height?.url} />
            
          </div>
        );
      })}
    </div>
  );
};

export default GiphyTrend;
