import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Search from './pages/Search';
import CreateListing from './pages/CreateListing';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App (){
  return (
     <BrowserRouter>
     <Header/>
    <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />



    </Routes>
    </BrowserRouter>
 
  )
   
}
