import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { caculateTotals,getCartItems } from "./redux/card/cartSlice";
import Modal from "./components/Modal";

function App() {

  const { cartItems, isLoading } = useSelector((state => state.cart));
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  
  useEffect(() => {
    dispatch(caculateTotals());  
  },[cartItems,dispatch]);

  useEffect(() => {
    dispatch(getCartItems('ramdom'));  
  },[dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
          <h1>Loading ...</h1>
      </div>
    )
  }

  return (
    <main>
      {
        isOpen && <Modal />
      }
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
