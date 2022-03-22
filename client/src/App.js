
import './App.css';
import './assets/styles/css/Main.css';
import Header from './Components/Header/Header';
import BookArchive from './Components/BooksArchive/BookArchive';
import BookPage from './Components/BookPage/BookPage';
// import './assets/styles/css/Main.css'

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
