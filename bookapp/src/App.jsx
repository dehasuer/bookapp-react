import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with:" ,title);
    
  }

  return (
    <div className='App'>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
