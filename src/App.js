import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
const UserSignup = lazy(() => import("./components/user/UserSignup")) 
const UserLogin = lazy(() => import("./components/user/UserLogin"))
const Movies = lazy(() => import("./components/movies/Movies"))

const App = () => {
  return (
    <>
    <Navbar />
    <Suspense fallback = {"loading"}>
    <Routes>
      <Route path='signup' element = {<UserSignup />}  />
      <Route path='login' element = {<UserLogin />}  />
      <Route path='movies' element = {<Movies />}  />

    </Routes>
    </Suspense>  
    </>
  );
}

export default App;
