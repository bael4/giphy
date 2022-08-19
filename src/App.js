import React, { useEffect } from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import AppRouter from './components/AppRouter'
// eslint-disable-next-line import/order
import { useDispatch } from 'react-redux'
import { fetchGiphyCategories } from './store/actions/giphyCategories'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGiphyCategories())
  }, [])
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  )
}

export default App
