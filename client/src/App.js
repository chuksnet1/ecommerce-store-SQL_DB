import './App.css';
import Home from './Pages/Home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDisplay from './Pages/ProductDisplay/ProductDisplay';
import { show } from './api/shopRequest';
import SignUpForm from './Pages/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector((state) => state.auth.value)
  console.log(user)


  return (
    <div className="App">


      <Routes>
        <Route path='/' element={user ? <Navigate to={"/home"} /> : <Navigate to={'/auth'} />} />
        <Route path='/home' element={user ? <Home /> : <Navigate to={'/'} />} />
        <Route path='/auth' element={user ? <Navigate to={'/home'} /> : <SignUpForm />} />
        <Route path='/product/' element={user ? <ProductDisplay /> : <Navigate to='/' />}>
          <Route path=':productId' element={<ProductDisplay />}></Route>
        </Route>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/' element={<ProductDisplay />}>
          <Route path=':productId' element={<ProductDisplay />}></Route>
        </Route>
      </Routes> */}

      {/* <SignUpForm /> */}

    </div>
  );
}

export default App;
