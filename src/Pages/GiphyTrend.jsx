import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGiphyTrend } from '../store/actions/giphyTrend'

function GiphyTrend() {
  const dispatch = useDispatch()

  const { giphyTrend } = useSelector((state) => state.giphyTrend)
  console.log(giphyTrend)

  useEffect(() => {
    dispatch(fetchGiphyTrend())
  }, [])

  return (
    <div className="container gifs">
      {giphyTrend?.data?.map((g) => (
        <div className="gif">
          <img src={g?.images?.fixed_height?.url} alt="img" />
        </div>
      ))}
    </div>
  )
}

export default GiphyTrend
