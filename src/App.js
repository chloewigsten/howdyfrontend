//Import Styling
import './App.css';

//Import Components 
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';

//Import Pages 
import Display from './pages/Display';
import ShowImage from './pages/ShowImage';


export default function App() {
  return (
    <div className ='App'>
      <Header />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/search/' element={<Display />} />
        <Route path='/show/' element={<ShowImage />} />
        <Route path='*' element={<Navigate to='/page-not-found' />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
