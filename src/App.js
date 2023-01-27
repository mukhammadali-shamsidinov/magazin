
import './App.css';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import { createContext, Fragment, useState } from 'react';
import Product from './components/product/product';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';
import Price from './components/price/price';
import Details from './components/details/details';
export const props = createContext()
function App() {
  const [open,setOpen] = useState(false)
  const [close,setClose] = useState(true)
  const openModal = ()=>setOpen(prev=>!prev)
  const closeModal = ()=>setClose(prev=>!prev)

  return (
    <BrowserRouter >
    <props.Provider value={{openModal,closeModal}}>
    <div className="app">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Fragment>
          <Sidebar />
          <br />
          <Product />
          <br />
          <Footer />

        </Fragment> } />
        <Route path='/price' element={<Price />} />
        <Route path='/details' element={<Details />} />
      </Routes>

    </div>
    </props.Provider>
   
    </BrowserRouter>

  );
}

export default App;
