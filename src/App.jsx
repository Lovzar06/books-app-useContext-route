import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BooksProvider } from './BooksContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookToRead from './pages/BookToRead'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <BooksProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
        <Route path='/toread' element={ <BookToRead/> }/>
    </Routes>
    </BooksProvider>
    </BrowserRouter>
    </>
  )
}

export default App
