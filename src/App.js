import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import BookList from './components/Book/BookList';
import Book from './components/Book/Book/Book';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="main-content max-800">
                <Routes>
                    <Route path='books'>
                        <Route index={true} element={<BookList />} />
                        <Route path=':slug' element={<Book />} />
                    </Route>
                    <Route path='about'>
                        <Route index={true} element={<About />} />
                    </Route>
                    <Route path='*' element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
