import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GiphyRandom from '../Pages/GiphyRandom'
import GiphyTrend from '../Pages/GiphyTrend'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<GiphyTrend />} />
      <Route path="/gg" element={<GiphyRandom />} />
    </Routes>
  )
}

export default AppRouter
