import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGiphyRandom } from '../store/actions/giphyRandom'

function GiphyRandom() {
  const dispatch = useDispatch()
  const { giphyRandom } = useSelector((state) => state.giphyRandom)
  console.log(giphyRandom)
  useEffect(() => {
    dispatch(fetchGiphyRandom())
  }, [])
  // const url_image = giphyRandom?.images.fixed_height.url

  return (
    <div className="container gifsRandom">
      <div className="gifRandom">
        <h1>{giphyRandom?.title}</h1>
        <img src={giphyRandom?.images?.downsized_large?.url} alt="img" />
      </div>
    </div>
  )
}

export default GiphyRandom
