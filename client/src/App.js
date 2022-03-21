
import './App.css';
import Header from './components/Header/Header';
import BookArchive from './components/BooksArchive/BookArchive';
import BookPage from './components/BookPage/BookPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <BookArchive/>
        <BookPage/>
      

      </div> 
    </div>
  );
}

export default App;
