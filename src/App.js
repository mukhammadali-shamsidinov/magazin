
import './App.css';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import { createContext, Fragment, useEffect, useState } from 'react';
import Product from './components/product/product';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';
import Price from './components/price/price';
import Details from './components/details/details';
import { collection, getDocs } from 'firebase/firestore';

import { db } from './config';
export const props = createContext()
function App() {

  const [open,setOpen] = useState(false)
  const [close,setClose] = useState(true)
  const openModal = ()=>setOpen(prev=>!prev)
  const closeModal = ()=>setClose(prev=>!prev)
  const [posts,setPosts] = useState([])
  const [details,setDetails] = useState()

  const getProducts = async () => {
    const query = await getDocs(collection(db,'products'))

    setPosts(query.docs.map(doc=> ({id:doc.id,...doc.data()})))
 

  }

  useEffect(()=>{
    getProducts()

  },[])

  function detailsItem(title,image,description,price,id){

    const obj = {
      title,
      image,
      price,
      description
    }

   setDetails(obj)

 
  }

  return (
    <BrowserRouter >
    <props.Provider value={{openModal,closeModal,detailsItem}}>
    <div className="app">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Fragment>
          <Sidebar />
          <br />
          <Product posts={posts} />
          <br />
          <Footer />

        </Fragment> } />
        <Route path='/price' element={<Price />} />
        <Route path='/home/details/*' element={<Details details={details} />} />
      </Routes>

    </div>
    </props.Provider>
   
    </BrowserRouter>

  );
}

export default App;
