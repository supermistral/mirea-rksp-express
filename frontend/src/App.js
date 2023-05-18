import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import BookList from './components/Book/BookList';
import Book from './components/Book/Book/Book';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { default as AdminBookList } from './components/AdminPanel/Books/BookList/BookList';


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
                    <Route path='admin'>
                        <Route index={true} element={<AdminPanel />} />
                        <Route path='books'>
                            <Route index={true} element={<AdminBookList />} />
                        </Route>
                        <Route path='users'>
                            <Route index={true} element={null} />
                        </Route>
                    </Route>
                    <Route path='*' element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
