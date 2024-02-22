import React, { useState } from 'react'
// import Navbar from './Nabar';
import Navbar from './Navbar';
import Myweb from './Myweb';
import "./style/web.css"
import Cart from './Cart';
// import Cart from './Cart';

// import Amazon from './Amazon';
// import data from '../Backend/Data';


const Home = ({ item }) => {

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)

  const addcart = (item) => {
    console.log("data", item);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    let ind = 0;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }


  return (
    <>

      <Navbar size={cart.length} setShow={setShow} />

      {
        show ? <Myweb addcart={addcart} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      {
        warning && <h1 className='warning'>item already add in cart</h1>
      }

    </>
  );
}

export default Home;