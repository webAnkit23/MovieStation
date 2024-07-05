import React from 'react'
import { Suspense, useEffect } from 'react';
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { getApiConfiguration, getGenre } from './Store/homeSlice';
import fetchData from './Api/Api.js'
import './App.css'
import Footer from './Components/footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
const Details =React.lazy(() => import('./Pages/Details.jsx'));
const Explore =React.lazy(() => import('./Pages/Explore.jsx'));
const Search =React.lazy(() => import('./Pages/Search.jsx'));
const Home =React.lazy(() => import('./Pages/Home.jsx'));
const Login = React.lazy(() => import('./Pages/LoginPage.jsx'));
export default function App() {
  const dispatch = useDispatch();
    const fillGenre =(url) =>{
        fetchData(url)
        .then(res => {
          if(!res.message){
            dispatch(getGenre(res))
          } 
        })
        .catch((err) =>console.log(err));
    }
    const fillURL =(url) =>{
      fetchData(url)
      .then(res =>{
        const imagesURL = res?.images?.secure_base_url +'original';
         imagesURL&&  dispatch(getApiConfiguration(imagesURL));
      })
      .catch((err) => console.log(err)) 
    }
    useEffect(() =>{
             fillGenre('/genre/movie/list');
             fillURL('/configuration');
    },[]);
  return (
    <BrowserRouter>
    <div >
    <Suspense fallback ={<div className='fallback' style={{minHeight:'100vh' ,zIndex:10000000}}>Loading...</div>}>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Login />}/>
      <Route path='/explore' element ={<Explore />}/>
      <Route path='/home' element ={<Home />}/>
      <Route path='/details/:mediaType/:id' element ={<Details />}/>
      <Route path='/search/:keywords' element ={<Search/>}/>
    </Routes>
    </Suspense>
    </div>
    <Footer />
    </BrowserRouter>
  )
}



